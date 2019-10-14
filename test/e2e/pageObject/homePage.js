const BasePage = require('..//pageObject/basePage');

class HomePage extends BasePage {

   constructor() {
      super();
      //this.mainImage = element(by.css(img[src *= "sandisk-main"]));
      //this.usbFlashTab = element(by.css(a[href *= "usb-flash"]));
      this.searchBox = element(by.css('form.search - container #search - box'));
      this.searchInput = element(by.css('form.search - container #search - box'));
   }

   clickSearch() {
      var self = this;
      return self.searchBox.click();
   }

   performSearch(searchTerm) {
      return this.searchBox.click().then(function () {
         return this.searchInput.sendKeys(searchTerm)
      });

   }

};

module.exports = HomePage;





