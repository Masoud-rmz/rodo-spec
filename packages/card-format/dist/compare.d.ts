export declare function normText(s: string): string;
export declare function toEpoch(v: unknown): unknown;
/** Field names: title, description, statusReason, text, startAt, dueAt, date, members, labels, hours, minutes, scope, list, status, financial, ... */
export declare function normalizeForCompare(field: string, value: unknown): unknown;
export declare function deepEqual(a: unknown, b: unknown): boolean;
export declare function fieldEquals(field: string, a: unknown, b: unknown): boolean;
