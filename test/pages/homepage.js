/**
 * Created by Yuvaraj on 21/07/2017.
 */
var Page = require('./page')

function HomePage() {
    this.title = '';
}
var objects = {
  get searchBox() {
      return browser.element('#twotabsearchtextbox');
  },
  get searchButton() {
      return browser.element('#nav-search > form > div.nav-right > div > input');
  }
};

HomePage.prototype = Object.create(Page.prototype);

HomePage.prototype.typeIntoSearchBox = function (value) {
  objects.searchBox.setValue(value);
};

HomePage.prototype.clickSearchButton = function () {
  objects.searchButton.click();
};
module.exports = new HomePage();