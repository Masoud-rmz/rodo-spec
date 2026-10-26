import type { CardModel, Finding, ValidateContext } from './model';
/** ref/11 §7 method hints (warnings only). */
export declare function methodHints(m: CardModel, ctx: ValidateContext, hasRefsSection: boolean): Finding[];
/** MAP section headings, Persian or English (dogfood P1-3). */
export declare const MAP_HEADINGS: {
    readonly cancelled: readonly ["لغوشده", "Cancelled"];
    readonly done: readonly ["انجام‌شده", "Done"];
};
/** True when MAP.md lists the cycle folder under one of the headings; links may be absolute (/rodo/p/cycles/x/) or relative (cycles/x/). */
export declare function listedInMap(map: string, folder: string, headings: readonly string[]): boolean;
