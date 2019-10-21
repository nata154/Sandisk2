const Wrapper = require('../helper/Wrapper');

class Scroller {

    async scroll(searchElement) {
        await browser.executeScript("arguments[0].scrollIntoView(false);", searchElement);
    }

    async scroll2(searchElement1, searchElement2) {
        try {
            (searchElement1).isDisplayed().then(displ => {
                if (displ) {
                    return browser.executeScript("arguments[0].scrollIntoView();", searchElement1);
                } else {
                    return browser.executeScript("arguments[0].scrollIntoView();", searchElement2);
                }
            })
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new Scroller();