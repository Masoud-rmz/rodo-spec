import type { CardModel } from './model';
export declare const fmtHours: (min: number) => string;
export declare function serializeCard(m: CardModel, opts?: {
    original?: string;
    eol?: '\n' | '\r\n';
}): string;
