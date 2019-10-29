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
      this.shopTab = element(by.css('#productStore'));
      this.latestProductsBut = element(by.xpath('//a[contains(text(), "Latest Products ")]'));
      this.allProductsBut = element(by.css('a[class="nav-link flex-1 hover:font-medium ng-binding"]'));
   }

   async moveToItem(){
      browser.actions().mouseMove(this.shopTab);
      console.log("Hovered to item shop");
      await this.shopTab.click();
   }

   async clickLatestProducts(){
      browser.actions().mouseMove(this.latestProductsBut);
      console.log("Hovered to item latest products");
      await this.latestProductsBut.click();
   }

   async clickAllProducts(){
      await this.allProductsBut.click();
   }

   async getPageTitle(){
      browser.sleep(10000);
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

};

module.exports = HomePage;