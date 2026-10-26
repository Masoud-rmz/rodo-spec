import type { CardModel, Finding } from './model';
export declare const isStr: (v: unknown) => v is string;
export declare function validDate(v: unknown): v is string;
/** `H:MM` -> minutes, or null when invalid. */
export declare function parseHours(v: unknown): number | null;
export interface FieldResult {
    model: CardModel;
    findings: Finding[];
    /** the file's own updatedAt / locked values, to compare with the base */
    fileUpdatedAt: unknown;
    fileLocked: unknown;
    hoursSet: boolean;
}
export declare function readFields(data: Record<string, unknown>, keyLine: Record<string, number>, order: string[]): FieldResult;
export declare const dateMs: (v: string | null) => number | null;
