'use strict';
const HomePage = require('./../pageObject/HomePage');
const ResultPage = require('./../pageObject/ResultPage');
const SSDPage = require('./../pageObject/SSDPage');
const UsbFlashPage = require('./../pageObject/UsbFlashPage');

describe('Sandisk home page', function () {

    beforeAll(() => {
        browser.get('https://www.sandisk.com');
    });

    afterAll(() => {
        browser.quit();
    });

    xit('should open main Sandisk page and check title', () => {
        browser.sleep(1000);
        let origTitle = 'SanDisk | Global Leader in Flash Memory Storage Solutions??';
        return HomePage.getPageTitle()
            .then(title => {
                return expect(title).toEqual( origTitle);
            })
    })

    xit('should check title through true', function () {
        let origTitle = 'SanDisk | Global Leader in Flash Memory Storage Solutions';
        return expect(HomePage.checkPageTitle(origTitle)).toEqual(true);
    });

    describe("Should check name of device", function () {

        xit('should find USB Drives section', function () {
            return HomePage.findSection("USB Drives");
        });

        it('should click find all devices', function () {
            return HomePage.clickViewAllUSBDrives();
        });

        it('should click first device', function () {
            return ResultPage.clickFirstItem();
        });

        it('should check name of device', function () {
            const expNameOfDevice = "SanDisk Ultra Luxe™ USB 3.1 Flash Drive";
            return expect(UsbFlashPage.getNameOfDevice()).toEqual(expNameOfDevice);
        });

    })
});