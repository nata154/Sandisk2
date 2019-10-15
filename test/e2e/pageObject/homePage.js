const BasePage = require('./BasePage');

class HomePage extends BasePage {

   constructor() {
      super();
      this.usbFlashTab = element(by.css('div#bs-example-navbar-collapse-1 a[href *= "usb-flash"]'));
      this.searchBox = element(by.css('form.search-container #search-box'));
      this.searchInput = element(by.css('form.search-container #search-box'));
   }

   clickUSBFlaskTab() {
      return this.usbFlashTab.click();
   }

   performSearch(searchTerm) {
         return this.searchBox.click()
            .then(function () {
               return this.searchInput.sendKeys(searchTerm);
            })
         .then(function () {
               return require('./ResultPage')
            });
   }
   
   //performSearch(searchTerm) {
   // let promise = this.searchBox.click();
   // promise.then(function () {
   //   return this.searchInput.sendKeys(searchTerm)
   // });

   // }
};

module.exports = new HomePage();