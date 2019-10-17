"use strict";

let { Then } = require('cucumber');
const expect = require('chai').expect;
const logger = require('../../config/loggerConfig.js').logger;
const UsbFlashPage = require('../../pageObject/UsbFlashPage');
const SSDPage = require('../../pageObject/SSDPage');

Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    let pageTitle = await browser.getTitle();
    logger.info(`Page title should${notArg} be ${text}`);
    if (notArg) {
        return expect(pageTitle).to.not.equal(text, `Title is not equal`);
    }
    else {
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


