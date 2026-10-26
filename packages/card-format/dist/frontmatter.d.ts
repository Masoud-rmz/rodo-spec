import type { Finding } from './model';
export interface SplitCard {
    bom: boolean;
    eol: '\n' | '\r\n';
    /** the original line 1 when it was a RODO_ERROR comment */
    errorLine: string | null;
    /** every line of the file (BOM stripped), 0-based index = file line - 1 */
    lines: string[];
    /** index of the first --- line, or -1 */
    fmStart: number;
    /** index of the closing --- line, or -1 */
    fmEnd: number;
    trailingNewline: boolean;
    findings: Finding[];
}
export declare function splitCard(input: string): SplitCard;
export interface ParsedFrontmatter {
    data: Record<string, unknown>;
    /** key order as written */
    order: string[];
    /** 1-based file line of each key */
    keyLine: Record<string, number>;
    findings: Finding[];
}
export declare function parseFrontmatter(lines: string[], fmStart: number, fmEnd: number): ParsedFrontmatter;
