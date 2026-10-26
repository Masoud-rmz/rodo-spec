import type { DecisionModel, Finding } from './model';
import { type Line } from './refs';
/** `rest` is the header text after "## Decision: " */
export declare function parseDecision(rest: string, headerNo: number, lines: Line[]): {
    decision: DecisionModel;
    findings: Finding[];
    ids: {
        id: string;
        no: number;
    }[];
};
