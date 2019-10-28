const { setWorldConstructor, defineSupportCode } = require('cucumber')

class World {
    constructor() {
        this.a = 10000000000001;

        defineSupportCode(({ setDefaultTimeout }) => {
            setDefaultTimeout(30 * 1000);
        });
    }
}

setWorldConstructor(World);