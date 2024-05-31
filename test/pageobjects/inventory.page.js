import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageTitle () {
        return $("xpath://span[@data-test='title']");
    }

    get menuBtn () {
        return $("xpath://button[@id='react-burger-menu-btn']")
    }

    get logoutLine () {
        return $("xpath://a[@data-test='logout-sidebar-link']")
    }

    get cartBage () {
        return $("xpath://span[@data-test='shopping-cart-badge']")
    }

    get cartLink () {
        return $("xpath://a[@data-test='shopping-cart-link']")
    }

    get activeOption () {
        return $("xpath://span[@data-test='active-option']")
    }

    async openSocial (social) {
        await $(`xpath://a[@data-test='social-${social}']`).click()
    }

    async clickOption (option) {
        await $(`xpath://select[@data-test='product-sort-container']/option[@value='${option}']`).click()
    }

    async itemAdd (product_name) {
        await $(`xpath://div[text()='${product_name}']/ancestor::div[@class='inventory_item']//button[text()='Add to cart']`).click()
    }

    async logout () {
        (await this.menuBtn).click();
        (await this.logoutLine).click();
    }

    async clickCartLink () {
        (await this.cartLink).click()
    }
}

export default new InventoryPage();
