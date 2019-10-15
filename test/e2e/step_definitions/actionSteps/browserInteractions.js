"use strict";
let { When } = require('cucumber');
const logger = require('../../config/loggerConfig.js').logger;

When(/^I open "([^"]*)" url$/, (url) => {
    logger.info(`I open ${url} url`);
    return browser.get(url);
});



