import type { ChecklistModel, DecisionModel, Finding, RefModel } from './model';
export interface ParsedBody {
    description: string;
    refs: RefModel[];
    hasRefsSection: boolean;
    decisions: DecisionModel[];
    checklists: ChecklistModel[];
    findings: Finding[];
    /** every rodo id comment with its file line (ID_DUPLICATE) */
    ids: {
        id: string;
        no: number;
    }[];
}
/** `lines` are the file lines after the frontmatter; `firstNo` is the file line number of lines[0]. */
export declare function parseBody(lines: string[], firstNo: number): ParsedBody;
