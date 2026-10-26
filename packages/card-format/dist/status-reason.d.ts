import type { CardStatus } from '@rodo/protocol';
/**
 * Kit 2.0 fallback (G2): the reason of a blocked/cancelled card used to live in the
 * Progress notes line `- Blocker: <reason>` / `- Cancelled: <reason>`.
 * Empty or `none` means no reason.
 */
export declare function readLegacyReason(description: string, status: CardStatus): string | null;
