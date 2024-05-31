import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("xpath://input[@data-test='username']");
    }

    get inputPassword () {
        return $("xpath://input[@data-test='password']");
    }

    get loginBtn () {
        return $("xpath://input[@data-test='login-button']");
    }

    get errorMessage () {
        return $("xpath://h3[@data-test='error']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
