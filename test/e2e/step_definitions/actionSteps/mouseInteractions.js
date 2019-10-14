"use strict";
const { When } = require('cucumber');
const logger = require('../../config/loggerConfig.js').logger;
const homePage = require('../../pageObject/homePage');

When(/^I click search button$/, function () {
    logger.info(`I click search button`);
    return homePage.clickSearch();
});

When(/^I perform search for "([^"]*)"$/, function (searchTerm) {
    logger.info(`I perform search for ${searchTerm}`);
    return homePage.performSearch(searchTerm);
});

