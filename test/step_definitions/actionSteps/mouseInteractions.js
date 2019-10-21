"use strict";

const {When} = require('cucumber');
const logger = require('./../../loggerConfig.js').logger;
const HomePage = require('../../pageObject/HomePage');
const ResultPage = require('../../pageObject/ResultPage');
const SSDPage = require('../../pageObject/SSDPage');


When('I click usb Flash tab', async () => {
    logger.info(`I click usb Flash tab`);
    await HomePage.clickUSBFlaskTab();
});

When('I perform search for {string}', async (searchTerm) => {
    logger.info(`I perform search for ${searchTerm}`);
    await HomePage.performSearch(searchTerm);
});

When('I click filter {string}', async (filterName) => {
    logger.info('I click filter ', filterName)
    await HomePage.clickFilter(filterName);
});

When('I click first item', async () => {
    logger.info(`I click first element`);
    await ResultPage.clickFirstItem();
});

When('I click {string} tab at homePage', async (tabName) => {
    logger.info('I click ${tabName} tab  at homePage', tabName)
    await HomePage.clickTab(tabName);
});

When('I click {string} tab at SSDPage', async (tabName) => {
    logger.info('I click ${tabName} tab  at SSDPage', tabName)
    await SSDPage.clickTab(tabName);
});

When('I set region {string}', async (region) => {//To Do
    logger.info('I set region ${region}', region)
    await SSDPage.clickRegion(region);
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



