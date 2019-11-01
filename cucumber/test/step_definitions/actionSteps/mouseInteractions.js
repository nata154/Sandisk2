"use strict";

const { When, Before } = require('cucumber');
const logger = require('./../../loggerConfig.js').logger;
const HeaderMenu = require('./../../pageObject/common/HeaderMenu');
const BasePage = require('./../../pageObject/BasePage');
const HomePage = require('./../../pageObject/HomePage');
const LatestProductPage = require('./../../pageObject/LatestProductsPage');
const ResultPage = require('./../../pageObject/ResultPage');
const SSDPage = require('./../../pageObject/SSDPage');
const UsbFlashPage = require('./../../pageObject/UsbFlashPage');
const LanguagePage = require('./../../pageObject/LanguagePage');

let headerMenu = new HeaderMenu();
let homePage = new HomePage();
let languagePage = new LanguagePage();

When('I click to {string} button', async (button) => {
    logger.info(`I click button ${button}`);
    switch (button) {
        case "Change language":
            console.log("clicked button language");
            await headerMenu.clickButtonLanguage();
            break;
        default:
            console.log("Default case in click button");
            break;
    }
});

When('I choose {string} in language options', async (language) => {
    logger.info(`I choose language ${language}`);
    await languagePage.chooseLanguage(language);
});

When('I click usb Flash tab', async () => {
    logger.info(`I click usb Flash tab`);
    await homePage.clickUSBFlaskTab();
});

When('I perform search for {string}', async (searchTerm) => {
    logger.info(`I perform search for ${searchTerm}`);
    await homePage.performSearch(searchTerm);
});

When('I click filter {string}', async (filterName) => {
    logger.info('I click filter ', filterName)
    await homePage.clickFilter(filterName);
});

When('I click first item', async () => {
    logger.info(`I click first element`);
    await resultPage.clickFirstItem();
});

When('I click {string} tab at homePage', async (tabName) => {
    logger.info('I click ${tabName} tab  at homePage', tabName)
    await homePage.clickTab(tabName);
});

When('I click {string} tab at SSDPage', async (tabName) => {
    logger.info('I click ${tabName} tab  at SSDPage', tabName)
    await ssdPage.clickTab(tabName);
});

When('I set region {string}', async (region) => {//To Do
    logger.info('I set region ${region}', region)
    await ssdPage.clickRegion(region);
});


// When('I click {int} item learn more', async (numberOfItem) => {
//     logger.info(`I click ${numberOfItem} item learn more`);
//     await ResultPage.clickDefiniteItem(numberOfItem);
// });

// When(/^I filter by USB$/, function () {
//     logger.info(`I filter by USB`);
//     return HomePage.clickFilterByUsb();
// });

// When(/^I filter by WireLess$/, function () {
//     logger.info(`I filter by I filter by WireLessB`);
//     return HomePage.clickFilterByWireless();
// });

// When(/^I scroll to element "([^"]*)"$/, async (scrollElement) => {
//     await HomePage.scroll(scrollElement);
// });



