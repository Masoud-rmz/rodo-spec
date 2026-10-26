import type { CardModel } from './model';
export declare function sha256Hex(input: string): string;
export declare function stableStringify(v: unknown): string;
/** Hash of every synced field (not workflow, extras, updatedAt, locked), compared with normalizeForCompare. */
export declare function canonicalHash(m: CardModel): string;
