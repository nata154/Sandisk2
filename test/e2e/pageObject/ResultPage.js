const BasePage = require('./BasePage');
const Wrapper = require('../helper/Wrapper');
const Scroller = require('../helper/Scroller');

class ResultPage extends BasePage {

   constructor() {
      super();
       this.firstItemLearnMore = element(by.xpath('//div[@class="search-result"]/div/a[contains(text(), "Learn More")]'));
   }

    async clickFirstItem() {
        await Wrapper.waitForElementClickableAndClick(this.firstItemLearnMore)
    }

};

module.exports = new ResultPage();