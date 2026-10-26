import type { PushOp, StatusGroup } from '@rodo/protocol';
import type { CardModel } from './model';
export type LocalChanges = Pick<PushOp, 'fields' | 'members' | 'labels' | 'refs' | 'checklists' | 'decisions'>;
export declare const isHold: (s: CardModel["status"]) => boolean;
/** The `status` sync group: reason only on a hold status, blockerType only when blocked (G2, ref/11 §4.1). */
export declare function statusGroup(m: CardModel): StatusGroup;
export declare function diffModels(base: CardModel, local: CardModel): LocalChanges;
export declare const isEmptyChanges: (c: LocalChanges) => boolean;
