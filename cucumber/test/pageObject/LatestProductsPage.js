const BasePage = require('./BasePage');
const Wrapper = require('./../helper/Wrapper');
const Scroller = require('./../helper/Scroller');

class LatestProductsPage extends BasePage {

    constructor() {
        super();
        this.allProductsTitle = element(by.css('div.flex.items-center h1'));
    }

    getTitleOfAllProducts() {
        console.log("in method getTitleOfAllProducts");
        return Wrapper.waitForElementVisible(this.allProductsTitle)
            .then(() => {
                return this.allProductsTitle.getText();
            })

    }
}

module.exports = new LatestProductsPage();