const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('../helper/Wrapper');
const Scroller = require('../helper/Scroller');
const {by, ExpectedConditions} = require('protractor');

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
      this.allBrands = element(by.css('div.block.px-10.py-3.font-medium'));
      this.assessories = element(by.css('a[aria-label="Accessories"]'));
      this.assessoriesTitle = element(by.css('div.flex.items-center h1'));
   }

   clickAllBrands(){
       // Wrapper.waitForElementVisible(this.allBrands)
       //     .then(() => {
               return this.allBrands.click();
           // })
   }

   clickAssessories(){
               return this.assessories.click();
   }

   getAssesoriesTitle(){
       // return Wrapper.waitForElementVisible(this.assessoriesTitle)
       //     .then( () => {
               return this.assessoriesTitle.getText();
           // })
   }

    moveToShop(){
        browser.actions().mouseMove(this.shopTab);
        return this.shopTab.click();
    }

    clickLatestProducts(){
        browser.actions().mouseMove(this.latestProductsBut);
        // Wrapper.waitForElementClickable(this.latestProductsBut)
        //     .then(async () =>{
                return this.latestProductsBut.click();
            // })
    }

    clickAllProducts(){
        Wrapper.waitForElementClickable(this.allProductsBut)
            .then(async () => {
                await this.allProductsBut.click();
            })
    }

    getPageTitle(){
        return browser.getTitle();
    }

    async checkPageTitle(expectedTitle) {
        return this.getPageTitle().then((title) => {
            return title === expectedTitle;
        });
    }

   async findSection(sectionName) {
      const sectionLocator = element(by.xpath(format(this.sectionTemplate, sectionName)));
      await Scroller.scroll(sectionLocator);
      await Wrapper.waitForElementVisible(sectionLocator)
          .then(async () => {
             await sectionLocator.click();
          });
   }

   async clickViewAllUSBDrives() {
      await Scroller.scroll(this.vievAllUsbDrives);
      await Wrapper.waitForElementVisible(this.vievAllUsbDrives)
          .then( async () => {
             await this.vievAllUsbDrives.click();
          });
   }

};

module.exports = HomePage;