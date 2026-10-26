import type { CardModel, Finding } from './model';
export interface ParseInfo {
    eol: '\n' | '\r\n';
    bom: boolean;
    trailingNewline: boolean;
    errorLine: string | null;
    keyLine: Record<string, number>;
    fileUpdatedAt: unknown;
    fileLocked: unknown;
    hasRefsSection: boolean;
    /** frontmatter keys as written */
    keyOrder: string[];
}
export interface ParsedCard {
    model: CardModel | null;
    findings: Finding[];
    info: ParseInfo | null;
}
export declare const isError: (f: Finding) => boolean;
/** Context-free parse + checks. Anything that needs a base, board meta or the disk is in validate.ts. */
export declare function parseCardFull(text: string): ParsedCard;
export declare function parseCard(text: string): {
    model: CardModel | null;
    errors: Finding[];
    warnings: Finding[];
};
/** Bytes -> text; invalid UTF-8 becomes ENCODING_INVALID. */
export declare function decodeCardBytes(bytes: Uint8Array): {
    text: string;
    error: Finding | null;
};
