const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('../helper/Wrapper');
const Scroller = require('../helper/Scroller');

class SSDPage extends BasePage{

    constructor() {
        super();
        this.tabTemplate = '//div[@class="text parbase"]//a[contains(text(), "{0}")]';
        this.nameOfDevice = element(by.css('div#hero-title h1'));
        this.regionTemplate = '//div[@class="text parbase"]//a[contains(text(), "{0}")]';// TO DO - wrong locator
    }

    async clickTab(tabName) {
        browser.sleep(2000);
        const tabLocator = element(by.xpath(format(this.tabTemplate, tabName)));
        //const filterLocatorH4 = element(by.xpath(format(this.tabTemplate, tabName)));
        await Scroller.scroll(tabLocator);
        await Wrapper.waitForElementVisible(tabLocator)
            .then(async () => {
                await tabLocator.click();//dont wait for page load
            });
    }

    async getNameOfDevice() {
        //await this.nameOfDevice.getText();   expected undefined to equal 'SANDISK EXTREME PRO USB 3.1 SOLID STATE FLASH DRIVE'
        return this.nameOfDevice.getText();
    }

    async clickRegion(region){//TO DO
        await this.regionTemplate.click();
    }
}

module.exports = new SSDPage();