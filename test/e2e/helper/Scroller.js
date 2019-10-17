const Wrapper = require('../helper/Wrapper');

class Scroller {

    async scroll(searchElement) {
        await browser.executeScript("arguments[0].scrollIntoView();", searchElement);
    }

    // async scroll2(searchElement1, searchElement2) {
    //     try {
    //         if ((searchElement1).isDisplayed()) {
    //             console.log("scrolls to first element");
    //             await browser.executeScript("arguments[0].scrollIntoView();", searchElement1);
    //         } else {
    //             console.log("scrolls to second element");
    //             await browser.executeScript("arguments[0].scrollIntoView();", searchElement2);
    //         }
    //     } catch (e) {
    //         throw new Error(e);
    //     }
    // }
}

module.exports = new Scroller();