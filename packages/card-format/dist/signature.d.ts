/** ref/13 §7: drop the volatile parts so the same failure gives the same signature. */
export declare function normalizeFailureMessage(s: string): string;
export declare function failureSignature(i: {
    adapter: string;
    scenario: string;
    step: string;
    errorType: string;
    message: string;
}): {
    full: string;
    short: string;
};
