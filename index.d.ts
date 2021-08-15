declare type Maybe = PromiseLike<unknown>;
declare type Yes = (value: unknown) => void;
declare type No = (reason?: any) => void;
export declare function areYouReadyYet(): {
    maybe: Maybe;
    yes: Yes;
    no: No;
};
export {};
