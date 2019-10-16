const EC = protractor.ExpectedConditions;
const defaultTimeout = 10 * 1000;
const Scroller = require('../helper/Scroller');

class Wrapper {

    // async scrollWaitForElementClickableAndClick(element, timeOut = defaultTimeout, isThrowError = true) {
    //     try {
    //         await Scroller.scroll(element)
    //             .then(async () => {
    //                 browser.sleep(5000);
    //                 await this.waitForElementClickableAndClick(element);
    //             });
    //     } catch
    //         (e) {
    //         if (isThrowError) {
    //             throw new Error(e);
    //         }
    //     }
    // }

    async waitForElementClickableAndClick(element, timeOut = defaultTimeout, isThrowError = true) {
        try {
            await browser.driver.wait(EC.elementToBeClickable(element), timeOut, `Element with selector type '${element.elementArrayFinder_.locator().using}' and selector '${element.elementArrayFinder_.locator().value}' is invisible`)
                .then(async () => {
                    return element.click();
                });
        } catch (e) {
            if (isThrowError) {
                throw new Error(e);
            }
        }
    }

    async waitForElementVisible(element, timeOut = defaultTimeout, isThrowError = true) {
        try {
            await browser.driver.wait(EC.visibilityOf(element), timeOut, `Element with selector type '${element.elementArrayFinder_.locator().using}' and selector '${element.elementArrayFinder_.locator().value}' is invisible`);
        } catch (e) {
            if (isThrowError) {
                throw new Error(e);
            }
        }
    }

    async waitForElementNotVisible(element, timeOut = defaultTimeout, isThrowError = true) {
        try {
            await browser.driver.wait(EC.invisibilityOf(element), timeOut, `Element with selector type '${element.elementArrayFinder_.locator().using}' and selector '${element.elementArrayFinder_.locator().value}' is visible`);
        } catch (e) {
            if (isThrowError) {
                throw new Error(e);
            }
        }
    }

    async sendKeys(element, text) {
        await this.waitForElementClickable(element);
        await element.sendKeys(text);
    }
}

module.exports = new Wrapper();