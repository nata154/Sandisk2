require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');

function CustomWorld() {
   this.driver = new seleniumWebdriver.Builder()
      .forBrowser('chrome').build();
}

defineSupportCode(function ({ setWorldConstructor }) {
   setWorldConstructor(CustomWorld);
})

//D: \JavaScript\Module10 - original\Protractor + Cucumber\test\e2e\support\world.js