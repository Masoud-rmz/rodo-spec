import type { BoardMeta, CardModel, Finding } from './model';
/** ref/11 §6 --- needs meta from the last sync; the server repeats these on push. */
export declare function boardChecks(m: CardModel, meta: BoardMeta, keyLine: Record<string, number>): Finding[];
