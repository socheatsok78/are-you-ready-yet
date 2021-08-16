declare type Maybe = PromiseLike<unknown>;
declare type Yes = (value: unknown) => void;
declare type No = (reason?: any) => void;
interface AreYouReadyYet {
    maybe: () => Maybe;
    yes: Yes;
    no: No;
}
export declare function areYouReadyYet(): AreYouReadyYet;
export {};
