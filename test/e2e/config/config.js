"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const logger = require('./loggerConfig.js').logger;

exports.config = {
    specs: [path.resolve('./test/e2e/features/*.feature')],
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
            path.resolve('./test/e2e/step_definitions/**/*.js'),
            'D:/Sandisk2/test/e2e/support/hooks.js',
            'D:/Sandisk2/test/e2e/support/world.js'
        ],
        ignoreUncaughtExceptions: true,
        format: 'json:./reports/report.json',
        tags: yargs.tag || '@USB-WireLess'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    }
};