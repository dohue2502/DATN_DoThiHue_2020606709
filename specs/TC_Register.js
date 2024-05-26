const { expect } = require('@wdio/globals')

const RegisterPage = require('../pageobjects/register.page')
const LoginPage = require('../pageobjects/login.page')

describe(' Register an account', () => {

    before ('', async() => {
        await RegisterPage.open()
        
        // await browser.performActions([
        //     {
        //         type: 'key',
        //         id: 'keyboard',
        //         actions: [
        //             { type: 'keyDown', value: '\uE009' }, // '\uE009' là mã cho phím Ctrl
        //             { type: 'keyDown', value: '\uE027' }, // '\uE027' là mã cho phím "-"
        //             { type: 'keyUp', value: '\uE027' },
        //             { type: 'keyDown', value: '\uE027' },
        //             { type: 'keyUp', value: '\uE027' },
        //             { type: 'keyUp', value: '\uE009' }
        //         ]
        //     }
        // ]);

        // await browser.actions([
        //     browser.action('key')
        //         .down('\uE009')
        //         .down('\uE027')
        //         .up('\uE027')
        //         .up('\uE009')

        // ])

        await browser.pause(4000)
    });
   
    beforeEach('refresh Page', async () => {
        browser.refresh()
    });

    it('Hiển thị mặc định trường tài khoản', async () => {
        
        await expect(RegisterPage.inputUsername).toHaveAttribute('placeholder', expect.stringContaining('Tài khoản'))
    })

    it('Hiển thị mặc định trường Email', async () => {
        
        await expect(RegisterPage.inputEmail).toHaveAttribute('placeholder', expect.stringContaining('Email'))
    })

    it('Hiển thị mặc định trường số điện thoại', async () => {
        
        await expect(RegisterPage.inputPhone).toHaveAttribute('placeholder', expect.stringContaining('Số Điện Thoại'))
    })

    it('Hiển thị mặc định trường mật khẩu', async () => {
        
        await expect(RegisterPage.inputPassword).toHaveAttribute('placeholder', expect.stringContaining('Mật khẩu'))
    })

    it('Hiển thị mặc định trường tên', async () => {
        
        await expect(RegisterPage.inputName).toHaveAttribute('placeholder', expect.stringContaining('Tên'))
    })

    it('Hiển thị mặc định trường họ', async () => {
        
        await expect(RegisterPage.inputLastName).toHaveAttribute('placeholder', expect.stringContaining('Họ'))
    })

    it('Hiển thị mặc định trường Ngày sinh', async () => {
        
        await expect(RegisterPage.date).toHaveAttribute('placeholder', expect.stringContaining('Ngày sinh'))
    })

    it('Button Đăng ký có thể click được', async () => {
        
        await expect(RegisterPage.btnRegister).toBeClickable()
    })

    it('Nhập 1 ký tự vào Email- không chứa @', async () => {

        await RegisterPage.register('hhh','h', '012345', '1234', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Enter a valid email address.')
    })

    it('Nhập 9 ký tự vào Email- không chứa @', async () => {

        await RegisterPage.register('hhh','huehuehue', '012345', '1234', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Enter a valid email address.')
    })

    it('Nhập 254 ký tự vào Email- không chứa @', async () => {

        await RegisterPage.register('hhh','Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers abcdPasswords must have at least 8 characters, including uppercase letters,lowercase letters,numbers abcdPasswords must have at least 8 characters, including', '012345', '1234', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Enter a valid email address.')
    })

    it('Bỏ trống số điện thoại điền các trường khác', async () => {

        await RegisterPage.register('huehue','hued@gmail.com', '', '1234', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('You have not provided a valid phone')
    })
    
    it('Nhập chữ vào Số điện thoại', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', 'hh', '1234', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Only enter numbers!')
    })

    it('Nhập ký tự đặc biệt vào Số điện thoại', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '@hh', '1234', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Only enter numbers!')
    })

    
    it('Nhập chữ hoa vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '012345', 'H', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })

    it('Nhập chữ thường vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '012345', 'hue', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })
    
    it('Nhập số vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '012345', '12', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })
    
    it('Nhập ký tự đặc biệt vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '012345', '@@@', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })

    it('Nhập 7 ký tự đủ loại vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '012345', 'Hue@123', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })
    
    
    it('Nhập >= 8 ký tự thiếu chữ hoa vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '012345', 'huegsdfsfds123@', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })

    it('Nhập >= 8 ký tự thiếu chữ thường vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '012345', 'HJKIS@123', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })
    
    it('Nhập >= 8 ký tự thiếu số vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hhhh@gmail.com', '012345', 'Huehuehue@', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })
    
    it('Nhập >=8 ký tự thiếu ký tự đặc biệt vào Mật khẩu', async () => {

        await RegisterPage.register('hhhh','hu@gmail.com', '012345', 'Huehue12345', 'hue', 'do', '224-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Passwords must have at least 8 characters, including uppercase letters,lowercase letters,numbers and special characters to ensure security!')
    })

    it('Bỏ trống ngày sinh', async () => {

        await RegisterPage.register('hhhh','hu@gmail.com', '12345', 'Huehue12345', 'hue', 'do', '')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('You have not provided a valid day_of_birth')
    })

    it('Nhập Ngày sinh không hợp lệ', async () => {

        await RegisterPage.register('hhhh','hu@gmail.com', '12345', 'Huehue12345', 'hue', 'do', '2024-05-15')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Enter a valid date.')
    })

    it('Đăng ký thành công', async () => {
        await RegisterPage.register('OK','OK@gmail.com', '12345', 'Huehue12345@', 'hue', 'do', '2024-05-15')
        await RegisterPage.btnShow.click()
        await browser.pause(1000)
        await expect(LoginPage.btnLogin).toExist()
    })
 
    
    it(' Click link Đăng nhập - Điền đúng đủ thông tin', async () => {
        await browser.url('http://127.0.0.1:8000/user/register/')
        await RegisterPage.inputUsername.setValue('hjuhuhu')
        await RegisterPage.inputEmail.setValue('hjuhuhu@gmail.com')
        await RegisterPage.inputPhone.setValue('092472847')
        await RegisterPage.inputPassword.setValue('Huerwure1323@')
        await RegisterPage.inputName.setValue('hjuhuhu')
        await RegisterPage.inputLastName.setValue('hjuhuhu')

        await RegisterPage.LinkLogin.click()
        await browser.pause(1000)
        await expect(LoginPage.btnLogin).toExist()
    })

    it(' Click link Đăng nhập - Không điền thông tin', async () => {

        await browser.url('http://127.0.0.1:8000/user/register/')
        await RegisterPage.LinkLogin.click()
        await browser.pause(1000)
        await expect(LoginPage.btnLogin).toExist()
    })



//==================================================================================================//

/*    
    it('All empty', async () => {
        await browser.pause(1000)
        await RegisterPage.btnRegister.click()
        await browser.pause(3000)
        await expect(RegisterPage.page).toHaveTextContaining('Vui lòng điền vào trường này') 
    })

    it('Username trống - điền các trường khác', async () => {

        await RegisterPage.register('','hue@gmail.com', '123456', 'hue')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Not be empty!')  
    })

    it('Email trống - điền các trường khác', async () => {

        await RegisterPage.register('huehue','hue@gmail.com', '', 'hue')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Not be empty!')
    })

    

    it('Password trống - điền các trường khác', async () => {

        await RegisterPage.register('huehue','hue@gmail.com', '', 'hue')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Not be empty!')
    })

    it('Tên trống - điền các trường khác', async () => {

        await RegisterPage.register('huehue','hue@gmail.com', '', 'hue')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Not be empty!')
    })

    it('Họ trống - điền các trường khác', async () => {

        await RegisterPage.register('huehue','hue@gmail.com', '', 'hue')
        await browser.pause(1000)
        await expect(RegisterPage.page).toHaveTextContaining('Not be empty!')
    })
*/    
})