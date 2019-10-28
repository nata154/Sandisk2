'use strict';
const HomePage = require('./../pageObject/HomePage');
const ResultPage = require('./../pageObject/ResultPage');
const UsbFlashPage = require('./../pageObject/UsbFlashPage');

describe('Sandisk home page', function () {

    let homePage, resultPage, usbFlashPage;

    beforeAll(function () {
        browser.get('https://www.sandisk.com');
    });

    beforeEach(function () {
        homePage = new HomePage();
        resultPage = new ResultPage();
        usbFlashPage = new UsbFlashPage();
        this.a = 111111111;
    });

    afterAll(() => {
        browser.quit();
    });

    xit('should open main Sandisk page and check title', () => {
        browser.sleep(1000);
        let origTitle = 'SanDisk | Global Leader in Flash Memory Storage Solutions??';
        return homePage.getPageTitle()
            .then(title => {
                return expect(title).toEqual( origTitle);
            })
    })

    xit('should check title through true', function () {
        let origTitle = 'SanDisk | Global Leader in Flash Memory Storage Solutions';
        return expect(homePage.checkPageTitle(origTitle)).toEqual(true);
    });

    describe("Should check name of device", function () {

        beforeEach(function () {
            this.b = 22222222222;
        });

        it('should click find all devices', function () {
            console.log("variable a = " + this.a);
            console.log("variable b = " + this.b);
            return homePage.clickViewAllUSBDrives();
        });

        it('should click first device', function () {
            return resultPage.clickFirstItem();
        });

        it('should check name of device', function () {
            const expNameOfDevice = "SanDisk Ultra Luxe™ USB 3.1 Flash Drive";
            return expect(usbFlashPage.getNameOfDevice()).toEqual(expNameOfDevice);
        });

    })
});