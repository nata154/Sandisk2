'use strict';
const HomePage = require('./../pageObject/HomePage');
const ResultPage = require('./../pageObject/ResultPage');
const UsbFlashPage = require('./../pageObject/UsbFlashPage');
const LatestProductsPage = require('./../pageObject/LatestProductsPage');


describe('Sandisk home page', function () {

    let homePage, resultPage, usbFlashPage, latestProductPage;

    beforeAll(function () {
        browser.get('https://www.sandisk.com');
    });

    beforeEach(function () {
        this.a = 111111111;
        homePage = new HomePage();
        resultPage = new ResultPage();
        usbFlashPage = new UsbFlashPage();
        latestProductPage = new LatestProductsPage();
    });

    afterAll(() => {
        browser.quit();
    });

    describe("Should open latest products", function () {

        beforeEach(function () {
            this.b = 22222222222;
        });

        it('I hover over shop', async () => {
            this.c = 33333333333;
            await homePage.moveToShop();
        });

        it('I click to latest products', async () => {
            console.log("variable a = " + this.a);
            console.log("variable b = " + this.b);
            console.log("variable c = " + this.c);
            await homePage.clickLatestProducts();
        });

        it('I check that latest products page is opened', async () => {
            let expectedTitle = "Latest Products";
            await homePage.getPageTitle()
                .then((title) => {
                    return expect(title).toEqual(expectedTitle, "Wrong title of page while check that latest products")
                });
        });

        it('should click all products', async () => {
            await homePage.clickAllProducts();
        });

        it('should get name of element and compare it with expected', async () => {
            let expectedText = "All Products";
            return latestProductPage.getTitleOfAllProducts()
                .then((title) => {
                    console.log("Actual title " + title);
                    return expect(title).toEqual(expectedText, "Wrong name of element");
                })
        });
    });
});
