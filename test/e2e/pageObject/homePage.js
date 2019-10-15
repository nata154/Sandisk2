const BasePage = require('./BasePage');
//const UsbFlashPage = require('../../pageObject/UsbFlashPage');

class HomePage extends BasePage {

   constructor() {
      super();
      this.usbFlashTab = element(by.css('div#bs-example-navbar-collapse-1 a[href *= "usb-flash"]'));
      this.searchBox = element(by.css('form.search-container #search-box'));
      this.searchInput = element(by.css('form.search-container #search-box'));//cant find"
      this.rbUsb = element(by.xpath('//input[@type="radio"]//following::span[contains(text(), "USB")]//preceding-sibling::input'));
      this.rbrbWireless = element(by.xpath('//input[@type="radio"]//following::span[contains(text(), "Wireless")]//preceding-sibling::input'));

   }

   clickUSBFlaskTab() {
      return this.usbFlashTab.click();
   }

   performSearch(searchTerm) {
      return this.searchBox.click()
         .then(() => {
            return sendKeys(searchTerm)
         })
         .then(function () {
            return require('./ResultPage')
         });
   }

   clickFilterByUsb() {
      return this.rbUsb.click();
   }

   clickFilterByWireless() {
      this.scroll(this.rbrbWireless)
         .then(function () {
            return this.rbWireless.click();
         }).then(function () {
            return require('../pageObject/ResultPage')
         });
   }



   scroll(searchElement) {
      return browser.executeScript("arguments[0].scrollIntoView();", searchElement);
   }

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