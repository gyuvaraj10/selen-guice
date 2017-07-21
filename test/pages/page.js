/**
 * Created by Yuvaraj on 21/07/2017.
 */
function Page() {

}

Page.prototype.open = function (url) {
    browser.url('/'+url)
}

module.exports = Page;