import type { CardModel, Finding, ValidateContext } from './model';
export declare function validateCard(text: string, ctx: ValidateContext): {
    model: CardModel | null;
    errors: Finding[];
    warnings: Finding[];
};
