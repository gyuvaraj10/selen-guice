/**
 * Created by Yuvaraj on 21/07/2017.
 */
var HomePage = require('../../pages/homepage.js');

describe('amazon home test', function () {
    it('should enter product query', function () {
        HomePage.open('');
        HomePage.typeIntoSearchBox('laptop');
        HomePage.clickSearchButton()
    });
});
