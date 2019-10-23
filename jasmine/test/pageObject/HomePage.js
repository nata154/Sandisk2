const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('../helper/Wrapper');
const Scroller = require('../helper/Scroller');

class HomePage extends BasePage {

   constructor() {
      super();
      this.usbFlashTab = element(by.css('div#bs-example-navbar-collapse-1 a[href *= "usb-flash"]'));
      this.searchBox = element(by.css('form.search-container #search-box'));
      this.searchInput = element(by.css('form.search-container #search-box'));//cant find"
      this.radioButtonTemplate = '//input[@type="radio"]//following::span[contains(text(), "{0}")]//preceding-sibling::input';
      this.radioButtonTemplateH4 = '//input[@type="radio"]//following::span[contains(text(), "{0}")]//..//..//../h4';
      this.tabTemplate = '//div[@id="bs-example-navbar-collapse-1"]//a[contains(text(), "{0}")]';
   }

   async getPageTitle(){
      return browser.getTitle();
   }

   async checkPageTitle(expectedTitle){
      return this.getPageTitle().then((title) => {
         return title === expectedTitle;
      });
   }

   clickUSBFlaskTab() {
      return Wrapper.waitForElementClickableAndClick(this.usbFlashTab);
   }

   async clickFilter(filterName) {
      browser.sleep(2000);
      const filterLocator = element(by.xpath(format(this.radioButtonTemplate, filterName)));
     // const filterLocatorH4 = element(by.xpath(format(this.radioButtonTemplateH4, filterName)));
      await Scroller.scroll(filterLocator);
      browser.sleep(3000);
      await Wrapper.waitForElementVisible(filterLocator)
          .then(async () => {
             await filterLocator.click();
          });
   }

   async clickTab(tabName) {
      browser.sleep(2000);
      const tabLocator = element(by.xpath(format(this.tabTemplate, tabName)));
      //const filterLocatorH4 = element(by.xpath(format(this.tabTemplate, tabName)));
      await Scroller.scroll(tabLocator);
      await Wrapper.waitForElementVisible(tabLocator)
          .then(async () => {
             await tabLocator.click();
          });
   }



   // async clickFilter(filterName) {
   //    console.log("function clickFilter");
   //    const filterLocator = element(by.xpath(format(this.buttonTemplate, filterName)));
   //    await this.scroll(this.buttonTemplate)
   //        .then(async () => {
   //           await Wrapper.waitForElementClickable(filterLocator)
   //               .then(async () => {
   //                  console.log("click" + filterLocator);
   //                  await filterLocator.click();
   //               });
   //        })
   // }

   // async scroll(searchElement) {
   //    await browser.executeScript("arguments[0].scrollIntoView();", searchElement);
   // }

   // performSearch(searchTerm) {
   //    return this.searchBox.click()
   //        .then(() => {
   //           return sendKeys(searchTerm)
   //        })
   //        .then(function () {
   //           return require('./ResultPage')
   //        });
   // }

   // clickFilterByUsb() {
   //    return element(by.xpath(format(this.buttonTemplate, "USB"))).click()
   //    // return this.rbUsb.click();
   // }
   //
   // clickFilterByWireless() {
   //    this.scroll(this.rbrbWireless)
   //       .then(function () {
   //          return this.rbWireless.click();
   //       }).then(function () {
   //          return require('../pageObject/ResultPage')
   //       });
   // }

   //performSearch(searchTerm) {
   // let promise = this.searchBox.click();
   // promise.then(function () {
   //   return this.searchInput.sendKeys(searchTerm)
   // });

   // }

   //performSearch(searchTerm) {
   //   return this.searchBox.click()
   //      .then(function () {
   //         return this.searchInput.sendKeys(searchTerm);
   //       })
   //      .then(function () {
   //return require('./ResultPage')
   //    });
   //}
};

module.exports = new HomePage();