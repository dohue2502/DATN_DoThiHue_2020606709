const { $ } = require('@wdio/globals')
const Page = require('./page');

class UserPage extends Page {
    get facebook () {
        return $('MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root')
    }

    get avt () {
        return $('.profilePic')
    } 

    get cover () {
        return $('.cover')
    }

    get btnUpdate () {
        return $('')
    }
}
module.exports = new UserPage()