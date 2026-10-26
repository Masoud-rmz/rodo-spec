import { finding } from './codes';
const REF_LINE = /^- \[(.*?)\]\((<[^>]+>|[^)]*)\)(?:\s*<!-- rodo:ref_(\S+?) -->)?\s*$/;
export const ID_COMMENT = /^[a-z0-9]{8,32}$/;
export function parseRefs(lines) {
    const refs = [];
    const findings = [];
    const ids = [];
    const seen = new Set();
    for (const { text, no } of lines) {
        if (!text.trim() || /^\s*<!--.*-->\s*$/.test(text))
            continue; // a whole-line HTML comment is guidance, not content
        const m = REF_LINE.exec(text);
        if (!m) {
            findings.push(finding('REF_LINE_INVALID', no, { n: no }));
            continue;
        }
        const title = m[1].trim();
        if (title.length < 1 || title.length > 200)
            findings.push(finding('REF_TITLE_INVALID', no, { n: no }));
        const raw = m[2].startsWith('<') ? m[2].slice(1, -1) : m[2];
        const pathOnly = raw.split('#')[0];
        if (!pathOnly.startsWith('/') || pathOnly.startsWith('//') || pathOnly.includes('\\') || pathOnly.split('/').includes('..')) {
            findings.push(finding('REF_PATH_INVALID', no, { path: raw }));
            continue;
        }
        if (seen.has(raw)) {
            findings.push(finding('REF_DUPLICATE', no, { path: raw }));
            continue;
        }
        seen.add(raw);
        const ref = { title, path: raw };
        if (m[3]) {
            if (ID_COMMENT.test(m[3])) {
                ref.id = m[3];
                ids.push({ id: m[3], no });
            }
            else
                findings.push(finding('ID_INVALID', no));
        }
        refs.push(ref);
    }
    if (refs.length > 20)
        findings.push(finding('REF_LIMIT_REACHED', lines[0]?.no ?? null));
    return { refs, findings, ids };
}
export const refPathOnly = (p) => p.split('#')[0];
