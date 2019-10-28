const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('../helper/Wrapper');
const Scroller = require('../helper/Scroller');

class HomePage extends BasePage {

   constructor() {
      super();
      this.usbFlashTab = element(by.css('div#bs-example-navbar-collapse-1 a[href *= "usb-flash"]'));
      this.radioButtonTemplate = '//input[@type="radio"]//following::span[contains(text(), "{0}")]//preceding-sibling::input';
      this.tabTemplate = '//div[@id="bs-example-navbar-collapse-1"]//a[contains(text(), "{0}")]';
   }

   clickUSBFlaskTab() {
      return Wrapper.waitForElementClickableAndClick(this.usbFlashTab);
   }

   async clickFilter(filterName) {
      const filterLocator = element(by.xpath(format(this.radioButtonTemplate, filterName)));
      await Scroller.scroll(filterLocator);
      await Wrapper.waitForElementVisible(filterLocator)
          .then(async () => {
             await filterLocator.click();
          });
   }

   async clickTab(tabName) {
      const tabLocator = element(by.xpath(format(this.tabTemplate, tabName)));
      await Scroller.scroll(tabLocator);
      await Wrapper.waitForElementVisible(tabLocator)
          .then(async () => {
             await tabLocator.click();
          });
   }
};

module.exports = new HomePage();