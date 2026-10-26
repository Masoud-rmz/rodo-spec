export interface SecretHit {
    kind: string;
    line: number; /** true = low-confidence match inside code (warning) */
    possible: boolean;
}
export declare function scanSecrets(text: string): SecretHit[];
