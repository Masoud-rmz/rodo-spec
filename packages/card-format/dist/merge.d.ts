import type { CardState } from '@rodo/protocol';
import { type LocalChanges } from './diff';
import type { CardModel } from './model';
/** ref/12 §5.3: the client wins only when its edit is more than 2 s newer than the server's. */
export declare function decideConflict(i: {
    editedAt: number;
    serverNowMs: number;
    serverAt: number;
}): 'client' | 'server';
export interface FieldMerge<T> {
    value: T;
    push: boolean;
    conflict: boolean;
}
/**
 * Three-way merge of one field. Only the side that changed wins; if both changed to different
 * values it is a true conflict: the local value is kept in the file and pushed, and the server
 * decides with `decideConflict` (the file is rewritten from the push result afterwards).
 */
export declare function mergeField<T>(field: string, base: T, local: T, remote: T): FieldMerge<T>;
/** Sets: apply the local add/remove to the remote set. */
export declare function mergeSet(base: string[], local: string[], remote: string[]): string[];
export interface ChildrenMerge<T> {
    merged: T[];
    deletedOnServer: T[];
    conflicts: number;
}
/** Keyed children (items, checklists, decisions). Server wins when it deleted what you edited (Q1). */
export declare function mergeChildren<T extends {
    id?: string;
}>(base: T[], local: T[], remote: T[], eq: (a: T, b: T) => boolean, mergeOne?: (b: T, l: T, r: T) => {
    value: T;
    conflict: boolean;
}): ChildrenMerge<T>;
export declare function threeWay(base: CardModel, local: CardModel, remote: CardModel): {
    push: LocalChanges;
    write: CardModel;
    conflicts: string[];
};
export declare function cardStateToModel(s: CardState): CardModel;
/** Sync fields only: `workflow` and `extras` are never part of it (D20). */
export declare function modelToCardState(m: CardModel): Omit<CardState, 'rev' | 'archived' | 'deleted' | 'rodoPath' | 'simpleDoc' | 'fieldRevs' | 'id' | 'updatedAt'>;
