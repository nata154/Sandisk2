const {setWorldConstructor, defineSupportCode} = require('cucumber');

class CustomWorld {
    constructor() {
        defineSupportCode(({setDefaultTimeout}) => {
            setDefaultTimeout(40 * 1000);
        })
    }
}

setWorldConstructor(CustomWorld);