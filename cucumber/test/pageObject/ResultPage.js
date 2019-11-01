const BasePage = require('./BasePage');
const format = require('string-format');
const Wrapper = require('./../helper/Wrapper');
const Scroller = require('./../helper/Scroller');

class ResultPage extends BasePage {

    constructor() {
        super();
        this.firstItem = element(by.xpath('//*[contains(text(), "Starting at")]'));
        this.titleOfFirstItem = element(by.css('h1.inline'));
    }

    async clickFirstItem() {
        await Wrapper.waitForElementClickableAndClick(this.firstItem)
    };

    getFirstItemTitle() {
        return Wrapper.waitForElementVisible(this.titleOfFirstItem)
            .then(() => {
                return this.titleOfFirstItem.getText();
            })
    };

};

module.exports = new ResultPage();