# Are you ready yet?

The `are-you-ready-yet` package is basically a joke on `Promise`.

Sometime you have to use your imagination to figure out what would be useful of this package. 

It might be keep you waiting for an answer, you'll never know!

😂 Good luck!

### Install

```sh
npm install are-you-ready-yet
# or
yarn add are-you-ready-yet
```

### Usage

```js
import { areYouReadyYet } from 'are-you-ready-yet'

class DoSomething {
    constructor() {
        const { yes, no, maybe } = areYouReadyYet()
        this.maybe = maybe
        this.yes = yes
        this.no = no

        // Now setup the instance
        // Once you are ready!
        this.setup()
    }

    async setup() {
        // Fake task to do something that take a very long time
        setTimeout(() => this.yes(), 5000)
    }
    

    /**
     * Wait for `maybe` to resolve
     */
    async doThat() {
        console.log("I'll do that after i'm ready!")
        await this.maybe
        console.log('I did it!')
    }
}

const do = new DoSomething()

do.doThat() // Promise
// This will output "I'll do that after i'm ready!"
// then wait until the `setTimeout` callback executed 
// and output "I did it!"
```

## License

Licensed under [MIT License](LICENSE)
