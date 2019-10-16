
class Scroller {

    async scroll(searchElement) {
        browser.executeScript("arguments[0].scrollIntoView();", searchElement);
    }
}

module.exports = new Scroller();