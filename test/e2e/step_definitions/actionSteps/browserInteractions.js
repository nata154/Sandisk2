"use strict";

let {Given} = require('cucumber');
const logger = require('../../config/loggerConfig.js').logger;

Given(/^I open "([^"]*)" url$/, async (url) => {
    logger.info(`I open ${url} url`);
    await browser.get(url);
});



