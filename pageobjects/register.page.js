const { $ } = require('@wdio/globals')
const Page = require('./page');

class RegisterPage extends Page {
    
    get inputUsername () {
        return $('[name="username"]');
    }

    get inputEmail () {
        return $('[name="email"]');
    }

    get inputPhone () {
        return $('[name="phone"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    
    get inputName () {
        return $('[name="first_name"]');
    }

    get inputLastName () {
        return $('[name="last_name"]');
    }

    get date () {
        return $('[name="day_of_birth"]')
    }

    get Male () {
        return $('#id_gender_0')
    }

    get FeMale () {
        return $('#id_gender_1')
    }

    get Other () {
        return $('#id_gender_2')
    }

    get btnRegister () {
        return $('[type="submit"]'); 
    }

    get LinkLogin () {
        return $('.group')
    }

    get page () {
        return $('.register')
    }

    get date () {
        return $('#id_day_of_birth')
    }

    get btnShow () {
        return $('.show');
    }
    

    async register (username, email, phone, password, name, lastname, date) {
        await this.inputUsername.setValue(username);
        await this.inputEmail.setValue(email);
        await this.inputPhone.setValue(phone);
        await this.inputPassword.setValue(password);
        await this.inputName.setValue(name);
        await this.inputLastName.setValue(lastname);
        await this.date.setValue(date);
        await this.Male.click();
       await this.btnRegister.click();
    }

    
    open () {
        return super.open('user/register');
    }
}

module.exports = new RegisterPage();