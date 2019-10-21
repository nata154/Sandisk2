
class Header {

   constructor() {
      this.logo = element(by.css('div a img[src *= "brand-logo-red"]'));
      //this.fullHeader = element(by.xpath("//*[@class='section centered barand-nav']"));
      this.usbFlashTab = element(by.css('.nav a[href *= "usb-flash.html"]'));
      //this.ssdTab = element(by.css(a[href *= "ssd.html"]));
   }
};

module.exports = Header;