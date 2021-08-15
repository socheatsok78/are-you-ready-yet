type Maybe = PromiseLike<unknown>
type Yes = (value: unknown) => void
type No = (reason?: any) => void

export function areYouReadyYet() {
    let resolver!: Yes
    let rejecter!: No

    const maybe: Maybe = new Promise((resolve, reject) => {
        resolver = resolve
        rejecter = reject
    })

    return {
        maybe: maybe,
        yes: resolver,
        no: rejecter,
    }
}
