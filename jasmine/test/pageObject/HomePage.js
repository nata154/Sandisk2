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
      this.sectionTemplate = '//h5[@class="mb-0" and contains(text(), "{0}")]';
      this.vievAllUsbDrives = element(by.xpath('//*[contains(text(), "View All USB Drives")]'));

   }

   async getPageTitle(){
      return browser.getTitle();
   }

   async checkPageTitle(expectedTitle) {
      return this.getPageTitle().then((title) => {
         return title === expectedTitle;
      });
   }

   async findSection(sectionName) {
      browser.sleep(1000);
      const sectionLocator = element(by.xpath(format(this.sectionTemplate, sectionName)));
      await Scroller.scroll(sectionLocator);
      await Wrapper.waitForElementVisible(sectionLocator)
          .then(async () => {
             await sectionLocator.click();
          });
   }

   async clickViewAllUSBDrives() {
      browser.sleep(1000);
      await Scroller.scroll(this.vievAllUsbDrives);
      await Wrapper.waitForElementVisible(this.vievAllUsbDrives)
          .then( async () => {
             await this.vievAllUsbDrives.click();
          });
   }

   // async clickTab(tabName) {
   //    browser.sleep(1000);
   //    const tabLocator = element(by.xpath(format(this.tabTemplate, tabName)));
   //    //const filterLocatorH4 = element(by.xpath(format(this.tabTemplate, tabName)));
   //    await Scroller.scroll(tabLocator);
   //    await Wrapper.waitForElementVisible(tabLocator)
   //        .then(async () => {
   //           await tabLocator.click();
   //        });
   // }

   // async clickFilter(filterName) {
   //    browser.sleep(1000);
   //    const filterLocator = element(by.xpath(format(this.radioButtonTemplate, filterName)));
   //    // const filterLocatorH4 = element(by.xpath(format(this.radioButtonTemplateH4, filterName)));
   //    await Scroller.scroll(filterLocator);
   //    browser.sleep(1000);
   //    await Wrapper.waitForElementVisible(filterLocator)
   //        .then(async () => {
   //           await filterLocator.click();
   //        });
   // }
};

module.exports = new HomePage();