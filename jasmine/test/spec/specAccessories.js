'use strict';
const HomePage = require('./../pageObject/HomePage');
const ResultPage = require('./../pageObject/ResultPage');
const UsbFlashPage = require('./../pageObject/UsbFlashPage');
const LatestProductsPage = require('./../pageObject/LatestProductsPage');

describe('another', () => {
    let homePage, resultPage, usbFlashPage, latestProductPage;

    beforeAll(function () {
        browser.get('https://www.sandisk.com');
    });

    beforeEach(function () {
        homePage = new HomePage();
        resultPage = new ResultPage();
        usbFlashPage = new UsbFlashPage();
        latestProductPage = new LatestProductsPage();
    });

    afterAll(() => {
        browser.quit();
    });

    it('I hover over shop tab', async () => {
       await homePage.moveToShop();
    })

    it('I click all brands', async () => {
        await homePage.clickAllBrands();
    })

    it('I click assesories', async () => {
        await homePage.clickAssessories();
    });

    it('I check title in assessories', async () => {//nen
        let titleExp = 'Accessories';
        return homePage.getAssesoriesTitle()
            .then((title) => {
                console.log("existing title " +title);
                return expect(title).toEqual(titleExp);
            })
    });

    it('I click first item in assessries', async () => {
        await resultPage.clickFirstItem();
    });

    it('I check its title', async () => {
        let expItem = "G-SPEED Shuttle Pelican Case";
        return resultPage.getFirstItemTitle()
            .then((title) => {
                console.log(title);
                return expect(title).toEqual(expItem);
            })
    })

})