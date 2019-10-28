const BasePage = require('./BasePage');

class UsbFlashPage extends BasePage {

   constructor() {
      super();
      this.nameOfDevice = element(by.css('h1.inline'));
   }

   async getNameOfDevice() {
      browser.sleep(5000);
      return this.nameOfDevice.getText();
   }
}

module.exports = UsbFlashPage;