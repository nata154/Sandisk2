const BasePage = require('./BasePage');

class ResultPage extends BasePage {

   constructor() {
      super();
      this.firstItemLearnMore = element(by.xpath('//a[@class="btn actionItem" and contains(text(), "Learn More")]'));
   }

   async clickFirstElementAfterSort() {
      console.log('it clickFirstElementAfterSort +++++++++++');
      return this.scroll(this.firstItemLearnMore)
         .then(function () {
            return this.firstItemLearnMore.click()
               .then(function () {
                  return browser.sleep(4000);
                  // return require('../pageObject/UsbFlashPage');
               });
         });
   }

   scroll(searchElement) {
      return browser.executeScript("arguments[0].scrollIntoView();", searchElement);
   }

};

module.exports = new ResultPage();