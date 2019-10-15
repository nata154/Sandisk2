"use strict";
const { When, And } = require('cucumber');
const logger = require('../../config/loggerConfig.js').logger;
const HomePage = require('../../pageObject/HomePage');
const ResultPage = require('../../pageObject/ResultPage');
const UsbFlashPage = require('../../pageObject/UsbFlashPage');

When(/^I click usb Flash tab$/, () => {
    logger.info(`I click usb Flash tab`);
    return HomePage.clickUSBFlaskTab();
});

When(/^I perform search for "([^"]*)"$/, async (searchTerm) => {
    logger.info(`I perform search for ${searchTerm}`);
    await HomePage.performSearch(searchTerm);
});

When(/^I scroll to element "([^"]*)"$/, (scrollElement) => {
    return HomePage.scroll(scrollElement);
});

When(/^I click filter "([^"]*)"$/, async (filterName) => {
    console.log("filterName step definition", filterName)
    await HomePage.clickFilter(filterName);
});

When(/^I filter by USB$/, function () {
    logger.info(`I filter by USB`);
    return HomePage.clickFilterByUsb();
});

When(/^I filter by WireLess$/, function () {
    logger.info(`I filter by I filter by WireLessB`);
    return HomePage.clickFilterByWireless();
});

When(/^I click first item$/, async () => {
    logger.info(`I click first element`);
    await ResultPage.clickFirstElementAfterSort();
});

