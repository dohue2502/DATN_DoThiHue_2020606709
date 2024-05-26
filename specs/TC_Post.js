const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const path = require('path');
const homePage = require('../pageobjects/home.page');


describe(' Post ', () => {

    before ('', async() => {
        await LoginPage.open()
        await LoginPage.login('OK', 'Huehue12345@')
        await browser.pause(1000)
    });
   
    beforeEach('refresh Page', async () => {
        browser.refresh()
    });

    it('Hiển thị mặc định', async () => {
        
        await expect(homePage.postText).toHaveAttribute('placeholder', expect.stringContaining("What's on your mind?"))
    })
  
    it('Post 1 ký tự', async () => {
        await browser.pause(3000)
        await HomePage.postText.setValue('h')
        await HomePage.btnShare.click()
        await expect(HomePage.feed).toHaveTextContaining('few seconds')
    })

   it('Post 10 ký tự', async () => {
        await browser.pause(3000)
        await HomePage.postText.setValue('h123456789')
        await HomePage.btnShare.click()
        await expect(HomePage.feed).toHaveTextContaining('few seconds')
    })

    it('Post 200 ký tự', async () => {
        await browser.pause(3000)
        await HomePage.postText.setValue('Người dùng có thể nhập liệu và chọn ảnh, thêm địa chỉ, gắn thẻ bạn bè và click btn "Đăng"để đăng bài')
        await HomePage.btnShare.click()
        await expect(HomePage.feed).toHaveTextContaining('few seconds')
    })

    it('Post ảnh', async () => {

        
        await browser.pause(5000)
        const imagePath = path.join(__dirname, '../../vit.jpg');
        await HomePage.postImg.setValue(imagePath);
        await browser.pause(2000)
        await HomePage.btnShare.click()
        await expect(HomePage.feed).toHaveTextContaining('few seconds')
    })

    it('Post 1 ký tự + ảnh', async () => {       
        await browser.pause(5000)
        await HomePage.postText.setValue('h')
        const imagePath = path.join(__dirname, '../../vit.jpg');
        await HomePage.postImg.setValue(imagePath);
        await browser.pause(2000)
        await HomePage.btnShare.click()
        await expect(HomePage.feed).toHaveTextContaining('few seconds')
    })

    it('Post 10 ký tự + ảnh', async () => {       
        await browser.pause(5000)
        await HomePage.postText.setValue('h12456789@')
        const imagePath = path.join(__dirname, '../../vit.jpg');
        await HomePage.postImg.setValue(imagePath);
        await browser.pause(2000)
        await HomePage.btnShare.click()
        await expect(HomePage.feed).toHaveTextContaining('few seconds')
    })

    it('Post 1 ký tự + ảnh', async () => {      
        await browser.pause(5000)
        await HomePage.postText.setValue('Người dùng có thể nhập liệu và chọn ảnh, thêm địa chỉ, gắn thẻ bạn bè và click btn "Đăng"để đăng bài')
        const imagePath = path.join(__dirname, '../../vit.jpg');
        await HomePage.postImg.setValue(imagePath);
        await browser.pause(2000)
        await HomePage.btnShare.click()
        await expect(HomePage.feed).toHaveTextContaining('few seconds')
    })


})