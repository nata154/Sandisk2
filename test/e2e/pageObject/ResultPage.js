const BasePage = require('./BasePage');
const Wrapper = require('../helper/Wrapper');
const Scroller = require('../helper/Scroller');

class ResultPage extends BasePage {

   constructor() {
      super();
       this.firstItemLearnMore = element(by.xpath('//div[@class="search-result"]/div/a[contains(text(), "Learn More")]'));
   }

    //a[@class="btn actionItem" and contains(text(), "Learn More")]
    //div[@class="search-result"]//a[contains(text(), "Learn More")]
    //a[@class="btn actionItem bg-red ng-scope"]/following::a
    //a[@class="btn actionItem bg-red ng-scope"]/following::a[contains(text(), "Learn More")]
//*[@class="section centered barand-nav" and @style="background-color: #"]
//*[@href="/" and @class="brand-logo"]

    async clickFirstItem() {
        await Wrapper.waitForElementClickableAndClick(this.firstItemLearnMore)
    }

};

module.exports = new ResultPage();