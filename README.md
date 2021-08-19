# Are you ready yet?

[![npm-badge][npm-badge]][npm-url]

The `are-you-ready-yet` package is basically a joke on `Promise`.

Sometime you have to use your imagination to figure out what would be useful of this package.  
It might be keep you waiting for an answer, you'll never know!

😂 &nbsp;Good luck!

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
        this.ready = areYouReadyYet()

        // Now setup the instance
        // Once you are ready!
        this.setup()
    }

    async setup() {
        // Fake task to do something that take a very long time
        setTimeout(() => this.ready.yes(), 5000)

        // If you want to throw error
        // this.ready.no(new Error('Your error message'))
    }
    

    /**
     * Wait for `maybe` to resolve
     */
    async doThat() {
        console.log("I'll do that after i'm ready!")
        await this.ready.maybe()
        console.log('I did it!')
    }
}

const do = new DoSomething()

do.doThat() // Promise
// This will output "I'll do that after i'm ready!"
// then wait until the `setTimeout` callback executed 
// and output "I did it!"
```

Example of `are-you-ready-yet` used with [`GoogleChromeLabs/comlink`](https://github.com/GoogleChromeLabs/comlink). [Click here.](https://gist.github.com/socheatsok78/7ede85c6f479bb8c0b35c7114a6c3edf)

## License

Licensed under [MIT License](LICENSE)

<!-- Variables -->
[npm-badge]: https://img.shields.io/npm/dm/are-you-ready-yet
[npm-url]: https://npmjs.com/are-you-ready-yet
