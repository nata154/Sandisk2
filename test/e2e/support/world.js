const { setWorldConstructor, defineSupportCode } = require('cucumber');

class CustomWorld {
   constructor() {
      defineSupportCode(({ setDefaultTimeout }) => {
         setDefaultTimeout(10 * 1000);
      })
   }
}

setWorldConstructor(CustomWorld);