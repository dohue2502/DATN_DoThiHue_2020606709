const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const SearchPage = require('../pageobjects/search.page')

describe(' Tìm kiếm bạn bè ', () => {

    before ('', async() => {
        await LoginPage.open()
        await LoginPage.login('OK', 'Huehue12345@')
        await browser.pause(1000)
    });
   
    beforeEach('refresh Page', async () => {
        browser.refresh()
    });
   
    it('Bỏ trống ô search', async () => {
        
        await HomePage.Search.setValue('')
        await browser.keys('Enter');
        await expect(SearchPage.Result).toHaveTextContaining('Search results for keywords:')
    })

    it('Nhập 1 ký tự vào ô search ô search', async () => {
        
        await HomePage.Search.setValue('O')
        await browser.keys('Enter');
        await expect(SearchPage.Result).toHaveTextContaining('Search results for keywords: O')
    })

    it('Nhập 10 ký tự vào ô search ô search', async () => {
        
        await HomePage.Search.setValue('1234567890')
        await browser.keys('Enter');
        await expect(SearchPage.Result).toHaveTextContaining('Search results for keywords: 1234567890')
    })

    it('Nhập 100 ký tự vào ô search', async () => {
        
        await HomePage.Search.setValue('Người dùng có thể nhập liệu và chọn ảnh, thêm địa chỉ, gắn thẻ bạn bè và click btn "Đăng"để đăng bài')
        await browser.keys('Enter');
        await expect(SearchPage.Result).toHaveTextContaining('Search results for keywords: Người dùng có thể nhập liệu và chọn ảnh, thêm địa chỉ, gắn thẻ bạn bè và click btn "Đăng"để đăng bài')
    })
   
})








