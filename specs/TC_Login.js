const { expect } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page')
const RegisterPage = require('../pageobjects/register.page')
const HomePage = require('../pageobjects/home.page')

describe(' Login application', () => {

    before ('', async() => {
        await LoginPage.open()
    });
   
    beforeEach('refresh Page', async () => {
        browser.refresh()
    });

    it('Hiển thị mặc định trường Tài khoản', async () => {
        
        await expect(LoginPage.inputUsername).toHaveAttribute('placeholder', expect.stringContaining('Tài khoản'))
    })

    it('Hiển thị mặc định trường Mật khẩu', async () => {
        
        await expect(LoginPage.inputPassword).toHaveAttribute('placeholder', expect.stringContaining('Mật khẩu'))
    })

    it('Button Đăng nhập có thể click được', async () => {
        
        await expect(LoginPage.btnLogin).toBeClickable()
    })

    it('Username không chính xác ', async () => {
       
        await LoginPage.login('12345', 'hue@123')
        await browser.pause(1000)
        await expect(LoginPage.page).toHaveTextContaining('Please enter a correct username and password. Note that both fields may be case-sensitive.')
    })

    it('Username chính xác - Password không chính xác ', async () => {
       
        await LoginPage.login('OK', 'hue')
        await browser.pause(1000)
        await expect(LoginPage.page).toHaveTextContaining('Please enter a correct username and password. Note that both fields may be case-sensitive.')
    })

    it('Password không chính xác ', async () => {
       
        await LoginPage.login('hue', 'hue')
        await browser.pause(1000)
        await expect(LoginPage.page).toHaveTextContaining('Please enter a correct username and password. Note that both fields may be case-sensitive.')
    })

    it('Password chính xác chữ thường ', async () => {
       
        await LoginPage.login('OK', 'huehue12345@')
        await browser.pause(1000)
        await expect(LoginPage.page).toHaveTextContaining('Please enter a correct username and password. Note that both fields may be case-sensitive.')
    })


    it('Login OK ', async () => {
        
        await LoginPage.login('OK', 'Huehue12345@')
        await browser.pause(2000)
        await expect(HomePage.feed).toExist();
    })

    it(' Click link Đăng ký - Điền đúng đủ thông tin', async () => {
        await browser.url('http://127.0.0.1:8000/user/login/')
        await LoginPage.inputUsername.setValue('OK')
        await LoginPage.inputPassword.setValue('Huehue12345@')

        await LoginPage.register.click()
        await browser.pause(1000)
        await expect(RegisterPage.btnRegister).toExist()
    })

    it(' Click link Đăng ký - Không điền thông tin', async () => {

        await browser.url('http://127.0.0.1:8000/user/login/')
        await LoginPage.register.click()
        await browser.pause(1000)
        await expect(RegisterPage.btnRegister).toExist()
    })

    it(' Click link Quên mật khẩu - Điền đúng đủ thông tin', async () => {
        await browser.url('http://127.0.0.1:8000/user/login/')
        await LoginPage.inputUsername.setValue('OK')
        await LoginPage.inputPassword.setValue('Huehue12345@')

        await LoginPage.forget.click()
        await browser.pause(1000)
        await expect(LoginPage.btnLogin).not.toExist()
    })

    it(' Click link Quên mật khẩu - Không điền thông tin', async () => {

        await browser.url('http://127.0.0.1:8000/user/login/')
        await LoginPage.forget.click()
        await browser.pause(1000)
        await expect(LoginPage.btnLogin).not.toExist()
    })


//========================================================================

/*    
    it('Bỏ trống tất cả các trường', async () => {
       
        await browser.pause(1000)
        await LoginPage.btnLogin.click()
        await browser.pause(3000)
        await expect(LoginPage.page).toHaveTextContaining('Please enter a correct username and password. Note that both fields may be case-sensitive.')
    })


    it('Password trống', async () => {

        await LoginPage.login(dataLogin.emptyPassword)
        await browser.pause(3000)
        await expect(LoginPage.page).toHaveTextContaining('Wrong password or username!')
    })

    it('Username trống', async () => {

        await LoginPage.login('', '12345678')
        await browser.pause(3000)
        await expect(LoginPage.page).toHaveTextContaining('User not found!')
    })
*/
})

