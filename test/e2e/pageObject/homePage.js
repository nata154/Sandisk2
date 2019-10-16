const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('../helper/Wrapper');

class HomePage extends BasePage {

   constructor() {
      super();
      this.usbFlashTab = element(by.css('div#bs-example-navbar-collapse-1 a[href *= "usb-flash"]'));
      this.searchBox = element(by.css('form.search-container #search-box'));
      this.searchInput = element(by.css('form.search-container #search-box'));//cant find"
      // this.rbUsb = element(by.xpath('//input[@type="radio"]//following::span[contains(text(), "USB")]//preceding-sibling::input'));
      // this.rbrbWireless = element(by.xpath('//input[@type="radio"]//following::span[contains(text(), "Wireless")]//preceding-sibling::input'));
      this.buttonTemplate = '//input[@type="radio"]//following::span[contains(text(), "{0}")]//preceding-sibling::input'
   }

   clickUSBFlaskTab() {
      return Wrapper.waitForElementClickableAndClick(this.usbFlashTab);
   }

   async clickFilter(filterName) {
      const filterLocator = element(by.xpath(format(this.buttonTemplate, filterName)));
      //*[@class="section centered barand-nav" and @style="background-color: #"] click intercepted
      return Wrapper.waitForElementClickableAndClick(filterLocator);
   }

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