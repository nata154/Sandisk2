"use strict";

let {Given} = require('cucumber');
const logger = require('./../../loggerConfig.js').logger;

Given('I open {string} url', async (url) => {
    logger.info(`I open ${url} url`);
    await browser.get(url);
});



