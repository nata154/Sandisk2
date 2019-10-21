const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('../helper/Wrapper');
const Scroller = require('../helper/Scroller');

class ResultPage extends BasePage {

   constructor() {
      super();
       this.firstItemLearnMore = element(by.xpath('//div[@class="search-result"]/div/a[contains(text(), "Learn More")]'));
       this.itemTemplate = '//div[@class="search-result"]/div/a[contains(text(), "Learn More")]';
   }

    async clickFirstItem() {
        await Wrapper.waitForElementClickableAndClick(this.firstItemLearnMore)
    }


    // async clickDefiniteItem(numberOfItem) {
    //     browser.sleep(3000);
    //     const filterItem = element(by.xpath(format(this.itemTemplate, numberOfItem)));
    //     await Scroller.scroll(filterItem);
    //     browser.sleep(3000);
    //     await Wrapper.waitForElementVisible(filterItem)
    //         .then(async () => {
    //             await filterItem.click();
    //         });
    // }

};

module.exports = new ResultPage();