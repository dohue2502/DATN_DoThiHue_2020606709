const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {

    get feed () {
        return $('.middle-sidebar-bottom')
    }
    
    get Name () {
        return $('.d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0');
    }

    get Post () {
        return $('.posts');
    }

    get postText () {
        return $('[name="caption"]');
    }

    get postImg () {
        return $('[type="file"]');
    }

    get Search () {
        return $('[name="query"]')
    }

    get Follower () {
        return $('[value="1"]')
    }

    get btnShare () {
        return $('//*[@id="postForm"]/div[3]/button');
    }

    get commentbox () {
        return $('.form-control')
    }

    get commentBtn () {
        return $('#chatForm > button')
    }
    get cmt () {
        return $('#cmts')
    }

    get User () {
        return $('#chatForm > button')
    }

    open () {
        return browser.url(`http://127.0.0.1:8000/`)
    }

}
module.exports = new HomePage()
