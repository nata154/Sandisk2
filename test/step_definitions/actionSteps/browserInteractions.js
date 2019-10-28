"use strict";

let {Given} = require('cucumber');
const logger = require('./../../loggerConfig.js').logger;

Given('I open {string} url', function (url) {
    let world = this;
    logger.info(`I open ${url} url`);
    world.c = 4444444444444;
    return browser.get(url);
});