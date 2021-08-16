type Maybe = PromiseLike<unknown>
type Yes = (value: unknown) => void
type No = (reason?: any) => void

interface AreYouReadyYet {
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
