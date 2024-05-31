import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutOverviewPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageTitle () {
        return $("xpath://span[@data-test='title']");
    }

    get totalPrice () {
        return $("xpath://div[@data-test='total-label']")
    }

    get finishBtn () {
        return $("xpath://button[@data-test='finish']")
    }

    async saveTotal () {
        const priceText = await this.totalPrice.getText();
        const totalPrice = parseFloat(priceText.replace(/[^0-9.-]+/g,""));
        return totalPrice;
    }

    async pressFinish () {
        await this.finishBtn.click()
    }
}

export default new CheckoutOverviewPage();