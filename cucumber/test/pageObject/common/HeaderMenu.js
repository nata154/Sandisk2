const format = require('string-format');
const Wrapper = require('./../../helper/Wrapper');
const Scroller = require('./../../helper/Scroller');
const { element, by, ExpectedConditions } = require('protractor');

class HeaderMenu {

    constructor() {
        this.MyCloudIbiStoreLoginTemplate = '//ul[@class="list-reset flex"]//a[contains(text(), "{0}")]';
        this.shoppingCart = element(by.css('[aria-label="View Shopping Cart"]'));
        this.languageButton = element(by.xpath('//img[@title="United States"]/../..'));
    }

    async clickMyCloudIbiStoreLogin(sectionName) {
        const sectionLocator = element(by.xpath(format(this.MyCloudIbiStoreLoginTemplate, sectionName)));
        await Scroller.scroll(sectionLocator);
        await Wrapper.waitForElementVisible(sectionLocator)
            .then(async () => {
                await sectionLocator.click();
            });
    }

    clickShoppingCart() {
        return this.shoppingCart.click();
    }

    clickButtonLanguage() {
        return this.languageButton.click();
    }

};

module.exports = HeaderMenu;