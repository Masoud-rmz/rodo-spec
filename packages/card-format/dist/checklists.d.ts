import type { ChecklistModel, Finding } from './model';
import { type Line } from './refs';
export declare function parseChecklist(rest: string, headerNo: number, lines: Line[]): {
    checklist: ChecklistModel;
    findings: Finding[];
    ids: {
        id: string;
        no: number;
    }[];
};
