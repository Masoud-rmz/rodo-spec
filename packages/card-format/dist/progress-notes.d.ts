/** The `## Progress notes` section (header included) up to the next `## ` heading, or null. */
export declare function progressSection(description: string): string | null;
/**
 * When the incoming (board) description has no Progress notes section but the local one had,
 * append the local section so it is not lost. Returns the description unchanged otherwise.
 */
export declare function keepProgressNotes(incoming: string, local: string | null | undefined): string;
