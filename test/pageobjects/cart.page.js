import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageTitle () {
        return $("xpath://span[@data-test='title']");
    }

    get menuBtn () {
        return $("xpath://button[@id='react-burger-menu-btn']")
    }

    get itemName () {
        return $("xpath://div[@data-test='inventory-item-name']")
    }

    get checkoutBtn () {
        return $("xpath://button[@data-test='checkout']")
    }
    
    get productPrice() {
        return $("xpath://div[@data-test='inventory-item-price']");
    }  
    
    async clickCheckout () {
        await this.checkoutBtn.click()
    }

    async savePrice() {
        const priceText = await this.productPrice.getText();
        const price = parseFloat(priceText.replace(/[^0-9.-]+/g,""));
        return price;
    }
}

export default new CartPage();
