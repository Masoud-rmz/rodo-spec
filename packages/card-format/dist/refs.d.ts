import type { Finding, RefModel } from './model';
export interface Line {
    text: string;
    no: number;
}
export declare const ID_COMMENT: RegExp;
export declare function parseRefs(lines: Line[]): {
    refs: RefModel[];
    findings: Finding[];
    ids: {
        id: string;
        no: number;
    }[];
};
export declare const refPathOnly: (p: string) => string;
