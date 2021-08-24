export declare type Maybe = PromiseLike<unknown>;
export declare type Yes = (value?: unknown) => void;
export declare type No = (reason?: any) => void;
export interface AreYouReadyYet {
    maybe: () => Maybe;
    yes: Yes;
    no: No;
}
export declare function areYouReadyYet(): AreYouReadyYet;
