const { setWorldConstructor, defineSupportCode } = require('cucumber');

class CustomWorld {
   constructor() {
      defineSupportCode(({ setDefaultTimeout }) => {
          setDefaultTimeout(30 * 1000);
      })
   }
}

setWorldConstructor(CustomWorld);