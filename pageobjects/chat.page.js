const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchPage extends Page {

    get chatbox () {
        return $('#messageInput')
    }
    get btnSend () {
        return $('[value="Send"]')
    }

    get Chat () {
        return $('#chat_msgs')
    }
}

module.exports = new SearchPage()