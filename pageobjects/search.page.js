const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchPage extends Page {

    get Result () {
        return $('.col-xl-12')
    }
}

module.exports = new SearchPage()