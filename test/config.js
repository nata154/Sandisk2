"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const logger = require('./loggerConfig.js').logger;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [path.resolve('./features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1
    },
    disableChecks: true,
    cucumberOpts: {
        require: [
            path.resolve('./step_definitions/**/*.js'),
            './support/hooks.js',
            './../support/world.js'
        ],
        ignoreUncaughtExceptions: true,
        format: 'json:./reports/report.json',
        tags: yargs.tag || '@SSD-portable-highPerform-whereToBy-InEuropeBelarus'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    }
};