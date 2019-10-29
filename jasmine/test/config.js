"use strict";

//require('babel-core/register');

const path = require('path');
const yargs = require('yargs').argv;
const logger = require('./loggerConfig.js').logger;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./spec/*.js'],
    framework: 'jasmine',
    ignoreUncaughtExceptions: true,
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1
    },
    disableChecks: true,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 40000,
        showingTimimg: true,
        isVerbose: true,
        includeStackTrace: true,
        ignoreUncaughtExceptions: true,
        format: 'json:./reports/report.json'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    }
};