const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('../helper/Wrapper');
const Scroller = require('../helper/Scroller');

class ResultPage extends BasePage {

   constructor() {
      super();
       this.firstItem = element(by.xpath('//*[contains(text(), "Starting at")]'));
   }

    async clickFirstItem() {
        await Wrapper.waitForElementClickableAndClick(this.firstItem)
    }

};

module.exports = new ResultPage();