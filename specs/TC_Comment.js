const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

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
        
        await expect(HomePage.commentbox).toHaveAttribute('placeholder', expect.stringContaining(""))
    })
  
    it('Bình luận 1 ký tự', async () => {
        await browser.pause(3000)
        await HomePage.commentbox.setValue('h')
        await HomePage.commentBtn.doubleClick()
        await expect(HomePage.cmt).toHaveTextContaining('few seconds')
    })

   it('Bình luận 10 ký tự', async () => {
        await browser.pause(3000)
        await HomePage.commentbox.setValue('1234567890')
        await HomePage.commentBtn.doubleClick()
        await expect(HomePage.cmt).toHaveTextContaining('few seconds')
   })

    it('Bình luận 100 ký tự', async () => {
        await browser.pause(3000)
        await HomePage.commentbox.setValue('Kiểm tra behavior của Đăng btn khi nhập caption hoặc ảnhKiểm tra behavior của Đăng btn khi nhập capt')
        await HomePage.commentBtn.doubleClick()
        await expect(HomePage.cmt).toHaveTextContaining('few seconds')
    })


})

/*
describe("hooks", async() => {
    before(async() => { 
        // Chạy trước tất cả các bài kiểm thử
    }); 
    after(async () => {
        // Chạy sau tất cả các bài kiểm thử
    });
    beforeEach(async () => {
        //Chạy trước mỗi bài kiểm thử 
    });
    afterEach(async () => {
        //Chạy sau mỗi bài kiểm thử});
    })
     // Test cases
    it("TC_001", () => { 
        // Các câu lệnh thực thi test case;});
    });
})  
*/