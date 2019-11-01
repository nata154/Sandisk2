"use strict";

let { Then, Before } = require('cucumber');
const expect = require('chai').expect;
const logger = require('./../../loggerConfig.js').logger;
const BasePage = require('./../../pageObject/BasePage');
const HomePage = require('./../../pageObject/HomePage');
const LatestProductPage = require('./../../pageObject/LatestProductsPage');
const ResultPage = require('./../../pageObject/ResultPage');
const SSDPage = require('./../../pageObject/SSDPage');
const UsbFlashPage = require('./../../pageObject/UsbFlashPage');
const LanguagePage = require('./../../pageObject/LanguagePage');

let homePage = new HomePage();
let languagePage = new LanguagePage();

Then('I expect {string} region is present for Select Your Region form', async (searchRegion) => {
    logger.info(`I search for ${searchRegion}`);
    await languagePage.checkRegionPresence(searchRegion);
});

Then('I expect {string} button on page', async (searchButton) => {
    logger.info(`I found such ${searchButton} button at page`);
    await homePage.checkPresenceShopExploreSupport(searchButton);
});

Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    let pageTitle = await browser.getTitle();
    logger.info(`Page title should${notArg} be ${text}`);
    if (notArg) {
        return expect(pageTitle).to.not.equal(text, `Title is not equal`);
    } else {
        return expect(pageTitle).to.be.equal(text);
    }
});

Then('I check USBdevice name {string}', async (text) => {
    const nameOfDevice = await UsbFlashPage.getNameOfDevice();
    expect(nameOfDevice).to.be.equal(text.toUpperCase(), 'Device name is not equals');
});

Then('I check SSDdevice name {string}', async (text) => {
    const nameOfDevice = await SSDPage.getNameOfDevice();
    expect(nameOfDevice).to.be.equal(text.toUpperCase(), 'Device name is not equals');
});


