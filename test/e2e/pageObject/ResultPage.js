const BasePage = require('./BasePage');

class ResultPage extends BasePage {

   constructor() {
      super();
      this.firstItemLearnMore = element(by.xpath('//a[@class="btn actionItem" and contains(text(), "Learn More")]'));
   }

   clickFirstElementAfterSort() {
      console.log('it clickFirstElementAfterSort +++++++++++');
      this.scroll(this.firstItemLearnMore)
         .then(function () {
            this.firstItemLearnMore.click()
               .then(function () {
                  return require('../pageObject/UsbFlashPage');
               });
         });
   }

   scroll(searchElement) {
      return browser.executeScript("arguments[0].scrollIntoView();", searchElement);
   }
};

module.exports = new ResultPage();