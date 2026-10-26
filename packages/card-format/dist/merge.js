import { fieldEquals } from './compare';
import { diffModels, statusGroup } from './diff';
import { emptyModel } from './model';
/** ref/12 §5.3: the client wins only when its edit is more than 2 s newer than the server's. */
export function decideConflict(i) {
    const clientAt = Math.min(i.editedAt, i.serverNowMs);
    return clientAt > i.serverAt + 2000 ? 'client' : 'server';
}
/**
 * Three-way merge of one field. Only the side that changed wins; if both changed to different
 * values it is a true conflict: the local value is kept in the file and pushed, and the server
 * decides with `decideConflict` (the file is rewritten from the push result afterwards).
 */
export function mergeField(field, base, local, remote) {
    const localChanged = !fieldEquals(field, base, local);
    const remoteChanged = !fieldEquals(field, base, remote);
    if (!localChanged)
        return { value: remote, push: false, conflict: false };
    if (!remoteChanged)
        return { value: local, push: true, conflict: false };
    if (fieldEquals(field, local, remote))
        return { value: remote, push: false, conflict: false };
    return { value: local, push: true, conflict: true };
}
/** Sets: apply the local add/remove to the remote set. */
export function mergeSet(base, local, remote) {
    const add = local.filter((x) => !base.includes(x));
    const rem = base.filter((x) => !local.includes(x));
    return [...remote.filter((x) => !rem.includes(x)), ...add.filter((x) => !remote.includes(x))];
}
/** Keyed children (items, checklists, decisions). Server wins when it deleted what you edited (Q1). */
export function mergeChildren(base, local, remote, eq, mergeOne = (b, l, r) => {
    if (eq(b, l))
        return { value: r, conflict: false };
    if (eq(b, r) || eq(l, r))
        return { value: l, conflict: false };
    return { value: l, conflict: true };
}) {
    const byId = (xs, id) => (id ? xs.find((x) => x.id === id) : undefined);
    const merged = [];
    const deletedOnServer = [];
    let conflicts = 0;
    for (const r of remote) {
        const b = byId(base, r.id);
        const l = byId(local, r.id);
        if (b && !l) {
            if (!eq(b, r))
                merged.push(r);
            continue;
        } // deleted locally: stays if the server changed it
        if (b && l) {
            const m = mergeOne(b, l, r);
            if (m.conflict)
                conflicts++;
            merged.push(m.value);
        }
        else
            merged.push(r);
    }
    for (const b of base) {
        if (byId(remote, b.id))
            continue;
        const l = byId(local, b.id);
        if (l && !eq(b, l))
            deletedOnServer.push(l);
    }
    local.forEach((l, i) => {
        if (l.id && (byId(base, l.id) || byId(remote, l.id)))
            return;
        const prev = i > 0 ? local[i - 1].id : undefined;
        const at = prev ? merged.findIndex((x) => x.id === prev) : -1;
        merged.splice(at >= 0 ? at + 1 : merged.length, 0, l);
    });
    return { merged, deletedOnServer, conflicts };
}
const itemEq = (a, b) => fieldEquals('title', a.title, b.title) && a.isDone === b.isDone && (a.assignee ?? null) === (b.assignee ?? null)
    && a.minutes === b.minutes && a.kind === b.kind;
function mergeItem(b, l, r) {
    if (r.kind === 'approval' || b.kind === 'approval')
        return { value: r, conflict: false }; // human-owned
    let conflict = false;
    const pick = (k, f = String(k)) => {
        const m = mergeField(f, b[k], l[k], r[k]);
        conflict ||= m.conflict;
        return m.value;
    };
    return {
        value: { ...r, title: pick('title'), isDone: pick('isDone'), assignee: pick('assignee'), minutes: pick('minutes') },
        conflict,
    };
}
function mergeChecklist(b, l, r) {
    const t = mergeField('title', b.title, l.title, r.title);
    const items = mergeChildren(b.items, l.items, r.items, itemEq, mergeItem);
    return { value: { ...r, title: t.value, items: items.merged }, conflict: t.conflict || items.conflicts > 0 };
}
const checklistEq = (a, b) => fieldEquals('title', a.title, b.title) && a.items.length === b.items.length && a.items.every((x, i) => itemEq(x, b.items[i]));
const decisionEq = (a, b) => fieldEquals('text', a.question, b.question) && a.options.length === b.options.length
    && a.options.every((o, i) => o.key === b.options[i].key && fieldEquals('text', o.text, b.options[i].text)) && a.answer?.key === b.answer?.key;
export function threeWay(base, local, remote) {
    const conflicts = [];
    const w = structuredClone(remote);
    const take = (name, field, b, l, r) => {
        const m = mergeField(field, b, l, r);
        if (m.conflict)
            conflicts.push(name);
        return m.value;
    };
    w.title = take('title', 'title', base.title, local.title, remote.title);
    w.description = take('description', 'description', base.description, local.description, remote.description);
    const sg = take('status', 'status', statusGroup(base), statusGroup(local), statusGroup(remote));
    w.status = sg.status;
    w.list = sg.list ?? undefined;
    w.statusReason = sg.statusReason;
    w.blockerType = sg.blockerType;
    w.priority = take('priority', 'priority', base.priority, local.priority, remote.priority);
    w.coverColor = take('coverColor', 'coverColor', base.coverColor, local.coverColor, remote.coverColor);
    w.startAt = take('startAt', 'startAt', base.startAt, local.startAt, remote.startAt);
    w.dueAt = take('dueAt', 'dueAt', base.dueAt, local.dueAt, remote.dueAt);
    w.hoursMinutes = take('hours', 'hours', base.hoursMinutes, local.hoursMinutes, remote.hoursMinutes);
    w.financial = take('financial', 'financial', base.financial, local.financial, remote.financial);
    w.scope = take('scope', 'scope', base.scope, local.scope, remote.scope);
    w.test = take('test', 'test', base.test, local.test, remote.test);
    w.members = mergeSet(base.members, local.members, remote.members);
    w.labels = mergeSet(base.labels, local.labels, remote.labels);
    const added = local.refs.filter((r) => !base.refs.some((b) => b.path === r.path));
    const removed = base.refs.filter((b) => !local.refs.some((r) => r.path === b.path)).map((b) => b.path);
    w.refs = [...remote.refs.filter((r) => !removed.includes(r.path)), ...added.filter((a) => !remote.refs.some((r) => r.path === a.path))]
        .map((r) => {
        const l = local.refs.find((x) => x.id && x.id === r.id);
        const b = base.refs.find((x) => x.id && x.id === r.id);
        return l && b && fieldEquals('title', r.title, b.title) ? { ...r, title: l.title } : r;
    });
    const cl = mergeChildren(base.checklists, local.checklists, remote.checklists, checklistEq, mergeChecklist);
    w.checklists = cl.merged;
    if (cl.conflicts)
        conflicts.push('checklists');
    // decisions: answered ones never change locally; open ones follow the usual rules
    const dec = mergeChildren(base.decisions, local.decisions, remote.decisions, decisionEq, (b, l, r) => r.answer ? { value: r, conflict: false } : decisionEq(b, l) ? { value: r, conflict: false } : { value: l, conflict: !decisionEq(b, r) && !decisionEq(l, r) });
    w.decisions = dec.merged;
    if (dec.conflicts)
        conflicts.push('decisions');
    // local-only and server-owned keys
    w.workflow = local.workflow;
    w.extras = local.extras;
    w.schemaVersion = 2;
    return { push: diffModels(base, local), write: w, conflicts };
}
// ---- CardState <-> CardModel ----
export function cardStateToModel(s) {
    return {
        ...emptyModel(),
        schemaVersion: 2, id: s.id,
        title: s.title, status: s.status, statusReason: s.statusReason, blockerType: s.blockerType, list: s.list,
        priority: (s.priority ?? 'none'), members: [...s.members], labels: [...s.labels],
        startAt: s.startAt, dueAt: s.dueAt, coverColor: (s.coverColor ?? null),
        hoursMinutes: s.hours, financial: { type: s.financial.type, amount: s.financial.amount, category: s.financial.category, date: s.financial.date },
        scope: s.scope.allowed.length || s.scope.forbidden.length ? { ...s.scope } : null,
        test: s.test.adapter && s.test.command ? { adapter: s.test.adapter, command: s.test.command } : null,
        updatedAt: s.updatedAt, locked: s.locked, description: s.description,
        refs: s.refs.map((r) => ({ ...r })),
        decisions: s.decisions.map((d) => ({ id: d.id, question: d.question, options: d.options.map((o) => ({ ...o })), answer: d.answer ? { key: d.answer.key, note: d.answer.note } : null })),
        checklists: s.checklists.map((c) => ({
            id: c.id, title: c.title,
            items: c.items.map((i) => ({ id: i.id, title: i.title, isDone: i.isDone, assignee: i.assignee, minutes: i.minutes, kind: i.kind })),
        })),
    };
}
/** Sync fields only: `workflow` and `extras` are never part of it (D20). */
export function modelToCardState(m) {
    return {
        title: m.title, description: m.description, status: m.status, list: m.list ?? '',
        statusReason: m.statusReason, blockerType: m.blockerType, priority: m.priority, coverColor: m.coverColor,
        startAt: m.startAt, dueAt: m.dueAt, hours: m.hoursMinutes, financial: { ...m.financial },
        scope: m.scope ? { ...m.scope } : { allowed: [], forbidden: [] },
        test: m.test ? { ...m.test } : { adapter: null, command: null },
        members: [...m.members], labels: [...m.labels], locked: m.locked,
        refs: m.refs.map((r) => ({ id: r.id ?? '', title: r.title, path: r.path })),
        decisions: m.decisions.map((d) => ({
            id: d.id ?? '', question: d.question, options: d.options.map((o) => ({ ...o })),
            state: d.answer ? 'answered' : 'open',
            answer: d.answer ? { key: d.answer.key, note: d.answer.note, by: '', at: 0 } : null,
        })),
        checklists: m.checklists.map((c) => ({
            id: c.id ?? '', title: c.title, rev: '0',
            items: c.items.map((i) => ({ id: i.id ?? '', title: i.title, isDone: i.isDone, assignee: i.assignee, minutes: i.minutes, kind: i.kind, rev: '0' })),
        })),
    };
}
