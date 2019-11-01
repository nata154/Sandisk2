"use strict";

let {Given, Before} = require('cucumber');
const logger = require('./../../loggerConfig.js').logger;
// const BasePage = require('./../../pageObject/BasePage');
// const HomePage = require('./../../pageObject/HomePage');
// const LatestProductPage = require('./../../pageObject/LatestProductsPage');
// const ResultPage = require('./../../pageObject/ResultPage');
// const SSDPage = require('./../../pageObject/SSDPage');
// const UsbFlashPage = require('./../../pageObject/UsbFlashPage');
//
// let basePage, homePage, latestProductPage, resultPage, ssdPage, usbFlashPage;
//
// Before(function () {
//     basePage = new BasePage();
//     homePage = new HomePage();
//     latestProductPage = new LatestProductPage();
//     resultPage = new ResultPage();
//     ssdPage = new SSDPage();
//     usbFlashPage = new UsbFlashPage();
//     console.log('creating pages done!')
// });

Given('I open {string} url', async (url) => {
    logger.info(`I open ${url} url`);
    await browser.get(url);
});



