'use strict';
const HomePage = require('./../pageObject/HomePage');

describe('Sandisk home page', function () {

    beforeAll(() => {
        browser.get('https://www.sandisk.com');
    });

    afterAll(() => {
        browser.quit();
    });

    it('should open main Sandisk page and check title', () => {
        browser.sleep(1000);
        let origTitle = 'SanDisk | Global Leader in Flash Memory Storage Solutions??';
        return HomePage.getPageTitle()
            .then(title => {
                return expect(title).toEqual( origTitle);
            })
    })

    it('should check title through true', function () {
        let origTitle = 'SanDisk | Global Leader in Flash Memory Storage Solutions';
        return expect(HomePage.checkPageTitle(origTitle)).toEqual(true);
    });
});