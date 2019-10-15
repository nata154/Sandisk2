"use strict";
const { When } = require('cucumber');
const logger = require('../../config/loggerConfig.js').logger;
const HomePage = require('../../pageObject/HomePage');
const UsbFlashPage = require('../../pageObject/UsbFlashPage');

When(/^I click usb Flash tab$/, function () {
    logger.info(`I click usb Flash tab`);
    return HomePage.clickUSBFlaskTab();
});

When(/^I perform search for "([^"]*)"$/, async function (searchTerm) {
    logger.info(`I perform search for ${searchTerm}`);
    return await HomePage.performSearch(searchTerm);
});

