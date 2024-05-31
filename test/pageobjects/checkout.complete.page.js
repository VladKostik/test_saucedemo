import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutCompletePage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageHeader () {
        return $("xpath://h2[@data-test='complete-header']");
    }

    get backHomeBtn () {
        return $("xpath://button[@data-test='back-to-products']")
    }

    async saveTotal () {
        const priceText = await this.totalPrice.getText();
        const totalPrice = parseFloat(priceText.replace(/[^0-9.-]+/g,""));
        return totalPrice;
    }

    async pressBackHome () {
        await this.backHomeBtn.click()
    }
}

export default new CheckoutCompletePage();