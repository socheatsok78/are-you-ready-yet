export type Maybe = PromiseLike<unknown>
export type Yes = (value?: unknown) => void
export type No = (reason?: any) => void

export interface AreYouReadyYet {
    maybe: () => Maybe
    yes: Yes
    no: No
}

export function areYouReadyYet(): AreYouReadyYet {
    let resolver!: Yes
    let rejecter!: No

    const maybe: Maybe = new Promise((resolve, reject) => {
        resolver = resolve
        rejecter = reject
    })

    return {
        maybe: () => maybe,
        yes: resolver,
        no: rejecter,
    }
}
