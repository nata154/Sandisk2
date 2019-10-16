"use strict";

let { Then } = require('cucumber');
const expect = require('chai').expect;
const logger = require('../../config/loggerConfig.js').logger;

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

Then('I check parameters of filtering', function () {
    console.log('I check parameters of filtring +++++++++++++++');
    return 'pending';
});