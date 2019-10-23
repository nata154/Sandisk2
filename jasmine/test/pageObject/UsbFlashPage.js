const BasePage = require('./BasePage');

class USBFlashPage extends BasePage {

   constructor() {
      super();
      this.nameOfDevice = element(by.css('div.pageproperties h1'));
   }

   async getNameOfDevice() {
      //await this.nameOfDevice.getText();   expected undefined to equal 'SANDISK EXTREME PRO USB 3.1 SOLID STATE FLASH DRIVE'
      return this.nameOfDevice.getText();
   }
}

module.exports = new USBFlashPage();