const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('./../helper/Wrapper');
const Scroller = require('./../helper/Scroller');

class LanguagePage extends BasePage {

    constructor() {
        super();
        this.eachRegionTemplate = '//*[@class="mb-0 pr-10 font-medium md:font-bold" and contains(text(), "{0}")]';
        this.eachlanguageTemplate = '//div[@class="text-base font-normal text-black-50" and contains(text(), "{0}")]';
    }

    checkRegionPresence(regionName) {
        const eachRegion = element(by.xpath(format(this.eachRegionTemplate, regionName)));
        Scroller.scroll(eachRegion);
        return Wrapper.waitForElementClickable(eachRegion)
            .then(function () {
                return eachRegion.isDisplayed();
            });
    }

    async chooseLanguage(language) {
        const eachLanguage = element(by.xpath(format(this.eachlanguageTemplate, language)));
        Scroller.scroll(eachLanguage);
        await Wrapper.waitForElementClickable(eachLanguage)
            .then(async () => {
                await eachLanguage.click();
            });
    }

}

module.exports = LanguagePage;