const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const ChatPage = require('../pageobjects/chat.page')
const chatPage = require('../pageobjects/chat.page')

describe(' Nhắn tin cho bạn bè ', () => {

    before ('', async() => {
        await LoginPage.open()
        await LoginPage.login('OK', 'Huehue12345@')
        await browser.url('http://127.0.0.1:8000/chat/quanghuy/')
        await browser.pause(1000)
    });

    it('Hiển thị mặc định', async () => {
        
        await expect(chatPage.chatbox).toHaveAttribute('placeholder', expect.stringContaining('Type your message'))
    })
    
    it('Nhập 1 ký tự vào Message box', async () => {
        
        await ChatPage.chatbox.setValue('3')
        await ChatPage.btnSend.click()
        await expect(chatPage.Chat).toHaveTextContaining('3')
    })
    
    it('Nhập 100 ký tự vào Message box', async () => {
        
        await ChatPage.chatbox.setValue('Người dùng có thể nhập liệu và chọn ảnh, thêm địa chỉ, gắn thẻ bạn bè và click btn "Đăng"để đăng bài')
        await ChatPage.btnSend.click()
        await expect(chatPage.Chat).toHaveTextContaining('Người dùng có thể nhập liệu và chọn ảnh, thêm địa chỉ, gắn thẻ bạn bè và click btn "Đăng"để đăng bài')
    })

    it('Gửi bằng phím Enter', async () => {
        
        await ChatPage.chatbox.setValue('3')
        await browser.keys('Enter');
        await expect(chatPage.Chat).toHaveTextContaining('3')
    })
   
})
