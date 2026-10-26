import { BLOCKER_TYPES, CARD_STATUSES } from '@rodo/protocol';
import { finding } from './codes';
import { toEpoch } from './compare';
import { emptyModel } from './model';
const PRIORITIES = ['none', 'low', 'medium', 'high', 'urgent'];
const COVERS = ['purple', 'orange', 'green', 'sky', 'yellow', 'pink'];
const ADAPTERS = ['web', 'api', 'cli', 'mobile', 'iot', 'other'];
const WORKFLOWS = ['quick', 'standard', 'major'];
const USERNAME = /^[a-z0-9_.-]{3,32}$/;
const KNOWN = new Set([
    'schemaVersion', 'id', 'tempId', 'boardId', 'title', 'status', 'statusReason', 'blockerType', 'list', 'priority',
    'members', 'labels', 'startAt', 'dueAt', 'coverColor', 'hours', 'financial', 'scope', 'test', 'workflow', 'updatedAt', 'locked',
]);
const OLD_KEYS = {
    state: 'use status', assignee: 'use members', createdAt: 'remove it, it is a server field', t: 'remove it',
    approval: 'use an [approval] checklist item', requestId: 'use a todo card with ## Goal and ## Why',
    acceptance: 'use test', sync: 'remove it, rodo sync manages it', type: 'use labels',
};
export const isStr = (v) => typeof v === 'string';
const isObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
export function validDate(v) {
    if (!isStr(v))
        return false;
    const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
    if (d) {
        const t = new Date(Date.UTC(+d[1], +d[2] - 1, +d[3]));
        return t.getUTCFullYear() === +d[1] && t.getUTCMonth() === +d[2] - 1 && t.getUTCDate() === +d[3];
    }
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/.test(v) && !Number.isNaN(Date.parse(v));
}
/** `H:MM` -> minutes, or null when invalid. */
export function parseHours(v) {
    if (!isStr(v))
        return null;
    const m = /^(\d{1,3}):([0-5]\d)$/.exec(v.trim());
    return m ? +m[1] * 60 + +m[2] : null;
}
export function readFields(data, keyLine, order) {
    const m = emptyModel();
    const out = [];
    const L = (k) => keyLine[k] ?? null;
    const add = (code, k, args = {}) => out.push(finding(code, L(k), args));
    for (const k of order) {
        if (KNOWN.has(k) || k.startsWith('x-'))
            continue;
        if (k in OLD_KEYS)
            add('OLD_KEY', k, { key: k, hint: OLD_KEYS[k] });
        else
            add('UNKNOWN_KEY', k, { key: k });
    }
    for (const k of order)
        if (k.startsWith('x-'))
            m.extras[k] = data[k];
    // schemaVersion
    const sv = data.schemaVersion;
    if (sv === undefined || sv === null)
        add('SCHEMA_VERSION_MISSING', 'schemaVersion');
    else if (sv !== 1 && sv !== 2)
        add('SCHEMA_VERSION_INVALID', 'schemaVersion');
    m.schemaVersion = sv === 1 ? 1 : 2;
    if (data.id !== undefined && data.id !== null) {
        if (isStr(data.id) && /^[a-z0-9]{20,32}$/.test(data.id))
            m.id = data.id;
        else
            add('ID_INVALID', 'id');
    }
    if (data.tempId !== undefined && data.tempId !== null) {
        if (isStr(data.tempId) && /^tmp_[a-z0-9]{20,32}$/.test(data.tempId))
            m.tempId = data.tempId;
        else
            add('TEMP_ID_INVALID', 'tempId');
    }
    if (data.boardId !== undefined && data.boardId !== null) {
        if (isStr(data.boardId) && data.boardId.trim())
            m.boardId = data.boardId.trim();
        else
            add('BOARD_ID_MISSING', 'boardId');
    }
    else if (m.schemaVersion === 1)
        add('BOARD_ID_MISSING', 'schemaVersion');
    // title
    if (data.title === undefined || data.title === null)
        add('TITLE_MISSING', 'title');
    else if (!isStr(data.title) || data.title.trim().length < 1 || data.title.trim().length > 200)
        add('TITLE_INVALID', 'title');
    else
        m.title = data.title.trim();
    // status
    if (data.status === undefined || data.status === null)
        add('STATUS_MISSING', 'status');
    else if (!isStr(data.status) || !CARD_STATUSES.includes(data.status))
        add('STATUS_INVALID', 'status', { value: String(data.status) });
    else
        m.status = data.status;
    if (data.statusReason !== undefined && data.statusReason !== null) {
        const r = data.statusReason;
        if (isStr(r) && r.trim().length >= 1 && r.trim().length <= 500 && !/[\r\n]/.test(r.trim()))
            m.statusReason = r.trim();
        else
            add('STATUS_REASON_INVALID', 'statusReason');
    }
    if (data.blockerType !== undefined && data.blockerType !== null) {
        if (isStr(data.blockerType) && BLOCKER_TYPES.includes(data.blockerType))
            m.blockerType = data.blockerType;
        else
            add('BLOCKER_TYPE_INVALID', 'blockerType');
    }
    if (data.list !== undefined && data.list !== null) {
        if (isStr(data.list) && data.list.trim())
            m.list = data.list.trim();
        else
            add('UNKNOWN_LIST', 'list', { list: String(data.list) });
    }
    if (data.priority !== undefined && data.priority !== null) {
        if (isStr(data.priority) && PRIORITIES.includes(data.priority))
            m.priority = data.priority;
        else
            add('PRIORITY_INVALID', 'priority');
    }
    for (const [key, code, ok] of [
        ['members', 'MEMBERS_INVALID', (s) => isStr(s) && USERNAME.test(s)],
        ['labels', 'LABELS_INVALID', (s) => isStr(s) && s.length >= 1 && s.length <= 50],
    ]) {
        const v = data[key];
        if (v === undefined || v === null)
            continue;
        if (Array.isArray(v) && v.every(ok) && new Set(v).size === v.length)
            m[key] = v;
        else
            add(code, key);
    }
    for (const key of ['startAt', 'dueAt']) {
        const v = data[key];
        if (v === undefined || v === null)
            continue;
        if (validDate(v))
            m[key] = v;
        else
            add('DATE_INVALID', key, { key });
    }
    if (data.coverColor !== undefined && data.coverColor !== null) {
        if (isStr(data.coverColor) && COVERS.includes(data.coverColor))
            m.coverColor = data.coverColor;
        else
            add('COVER_COLOR_INVALID', 'coverColor');
    }
    let hoursSet = false;
    if (data.hours !== undefined && data.hours !== null) {
        const h = parseHours(data.hours);
        if (h === null)
            add('HOURS_INVALID', 'hours', { value: String(data.hours) });
        else {
            m.hoursMinutes = h;
            hoursSet = h !== 0;
        }
    }
    if (data.financial !== undefined && data.financial !== null)
        readFinancial(data.financial, m, add);
    if (data.scope !== undefined && data.scope !== null)
        readScope(data.scope, m, add);
    if (data.test !== undefined && data.test !== null) {
        const t = data.test;
        if (isObj(t) && Object.keys(t).every((k) => k === 'adapter' || k === 'command') && isStr(t.adapter) && ADAPTERS.includes(t.adapter)
            && isStr(t.command) && t.command.length >= 1 && t.command.length <= 500) {
            m.test = { adapter: t.adapter, command: t.command };
        }
        else
            add('TEST_INVALID', 'test');
    }
    if (data.workflow !== undefined && data.workflow !== null) {
        if (isStr(data.workflow) && WORKFLOWS.includes(data.workflow))
            m.workflow = data.workflow;
        else
            add('WORKFLOW_INVALID', 'workflow', { value: String(data.workflow) });
    }
    if (typeof data.updatedAt === 'number' && Number.isInteger(data.updatedAt))
        m.updatedAt = data.updatedAt;
    else if (data.updatedAt !== undefined && data.updatedAt !== null)
        add('UPDATED_AT_EDITED', 'updatedAt');
    if (typeof data.locked === 'boolean')
        m.locked = data.locked;
    else if (data.locked !== undefined && data.locked !== null)
        add('LOCKED_EDITED', 'locked');
    return { model: m, findings: out, fileUpdatedAt: data.updatedAt, fileLocked: data.locked, hoursSet };
}
function readFinancial(v, m, add) {
    const bad = (detail) => add('FINANCIAL_INVALID', 'financial', { detail });
    if (!isObj(v))
        return bad('financial must be a map with type, amount, category, date');
    const extra = Object.keys(v).find((k) => !['type', 'amount', 'category', 'date'].includes(k));
    if (extra)
        return bad(`unknown key "${extra}" (allowed: type, amount, category, date)`);
    const f = { ...m.financial };
    if (v.type !== undefined) {
        if (v.type === 'none' || v.type === 'expense' || v.type === 'income')
            f.type = v.type;
        else
            return bad('type must be none, expense or income');
    }
    if (v.amount !== undefined) {
        if (typeof v.amount === 'number' && Number.isInteger(v.amount) && v.amount >= 0)
            f.amount = v.amount;
        else
            return bad('amount must be a whole number');
    }
    if (v.category !== undefined) {
        if (isStr(v.category) && v.category.trim() && v.category.length <= 50)
            f.category = v.category.trim();
        else
            return bad('category must be 1-50 characters');
    }
    if (v.date !== undefined && v.date !== null) {
        if (validDate(v.date))
            f.date = v.date;
        else
            return bad('date must be YYYY-MM-DD');
    }
    if (f.type !== 'none' && !(f.amount > 0))
        return add('FINANCIAL_AMOUNT_REQUIRED', 'financial');
    m.financial = f;
}
function readScope(v, m, add) {
    const okList = (l) => l === undefined || (Array.isArray(l) && l.length <= 20 && l.every((s) => isStr(s) && s.length >= 1 && s.length <= 200));
    if (!isObj(v) || Object.keys(v).some((k) => k !== 'allowed' && k !== 'forbidden') || !okList(v.allowed) || !okList(v.forbidden)) {
        return add('SCOPE_INVALID', 'scope');
    }
    m.scope = { allowed: v.allowed ?? [], forbidden: v.forbidden ?? [] };
}
export const dateMs = (v) => (v ? toEpoch(v) : null);
