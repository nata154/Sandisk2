const Header = require('./common/HeaderMenu.js');

class BasePage {

   constructor() {
      this.header = new Header();
   }

   open() {
      return browser.get('http://www.sandisk.com');
   }

};

module.exports = BasePage;