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

    // xit('should open main Sandisk page and check title', () => {
    //     browser.sleep(1000);
    //     let origTitle = 'SanDisk | Global Leader in Flash Memory Storage Solutions??';
    //     return homePage.getPageTitle()
    //         .then(title => {
    //             return expect(title).toEqual( origTitle);
    //         })
    // })
    //
    // xit('should check title through true', function () {
    //     let origTitle = 'SanDisk | Global Leader in Flash Memory Storage Solutions';
    //     return expect(homePage.checkPageTitle(origTitle)).toEqual(true);
    // });

    describe("Should open latest products", function () {

        it('I hover over shop', function () {
    return homePage.moveToItem();
        });

        it('I click to latest products', function () {
    return homePage.clickLatestProducts();
        });

        it('I check that latest products page is opened', function () {
            let expectedTitle = "Latest Products";
        return homePage.getPageTitle()
             .then((title) => {
                 console.log(title);
                 return expect(title).toEqual(expectedTitle, "Wrong title of page while check that latest products");
            })
        });

        it('should click all products', function () {
            return homePage.clickAllProducts();
        });

    });

    xdescribe("Should check name of device", function () {

        beforeEach(function () {
            this.b = 22222222222;
        });

        it('should click find all devices', async () => {
            console.log("variable a = " + this.a);
            console.log("variable b = " + this.b);
            await homePage.clickViewAllUSBDrives();
        });

        it('should click first device', async () => {
            await resultPage.clickFirstItem();
        });

        it('should check name of device', async () => {
            const expNameOfDevice = "SanDisk Ultra USB Type-C Flash Drive";
            await expect(usbFlashPage.getNameOfDevice()).toEqual(expNameOfDevice);
        });

        it('should click button add to cart',  () => {
                return  usbFlashPage.addToCart();
        });

        it('should click button view cart', async () => {
           return usbFlashPage.clickViewCart();
        });

        it('should check that amount of items is 1', async () => {
            let expectedAmountOfItems = 1;
            return usbFlashPage.getAmountOfItemsInCart()
                .then((currentAmount) => {
                    expect(currentAmount).toEqual(expectedAmountOfItems.toString(), "The amount of items in cart is not as expected");
                })
        });


    })
});