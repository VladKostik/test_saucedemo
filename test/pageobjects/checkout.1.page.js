import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutOnePage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageTitle () {
        return $("xpath://span[@data-test='title']");
    }

    get checkoutBtn () {
        return $("xpath://button[@data-test='checkout']")
    }

    get firstNameField () {
        return $("xpath://input[@data-test='firstName']")
    }
    
    get lastNameField () {
        return $("xpath://input[@data-test='lastName']")
    }

    get ZipField () {
        return $("xpath://input[@data-test='postalCode']")
    }

    get continueBtn () {
        return $("xpath://input[@data-test='continue']")
    }

    async clickCheckout () {
        await this.checkoutBtn.click()
    }

    async checkoutStepOne (firstName, lastName, Zip) {
        await this.firstNameField.setValue(firstName)
        await this.lastNameField.setValue(lastName)
        await this.ZipField.setValue(Zip)
        await this.continueBtn.click()
    }
}

export default new CheckoutOnePage();