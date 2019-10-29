const BasePage = require('./BasePage');
const Wrapper = require('./../helper/Wrapper');

class UsbFlashPage extends BasePage {

   constructor() {
      super();
      this.nameOfDevice = element(by.css('h1.inline'));
      this.addToCartButton = element(by.xpath('//button[@ng-click="addToCart(currentSku,$event)"]'));
      this.cartIcon = element(by.css('.sc-track span'));
      this.vievCartButton = element(by.css('a[ng-href="https://shop.westerndigital.com/store/cart"]'))
   }

   getNameOfDevice() {
      browser.sleep(1000);
      return this.nameOfDevice.getText();
   }

   async addToCart(){
      await Wrapper.waitForElementClickable(this.addToCartButton)
          .then(async () => {
             await this.addToCartButton.click();
          });
   }

   async clickViewCart(){
      await Wrapper.waitForElementClickable(this.vievCartButton)
          .then(async () => {
             this.vievCartButton.click();
          })
   }

   getAmountOfItemsInCart(){
      return this.cartIcon.getText();
   }
}

module.exports = UsbFlashPage;