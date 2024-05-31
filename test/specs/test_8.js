import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from "../pageobjects/cart.page.js"
import CheckoutOnePage from "../pageobjects/checkout.1.page.js"
import CheckoutOverviewPage from "../pageobjects/checkout.overview.page.js"
import CheckoutCompletePage from "../pageobjects/checkout.complete.page.js"

describe('Checkout validation | ', (
    product_name = 'Sauce Labs Backpack',
    firstName='John', 
    lastName='Doe', 
    Zip='65000') => {
    it('Total price should be equal to price of products addet to the cart', async () => {
        let errorOccurred = false;       
        try {
            await LoginPage.open()
            await LoginPage.login('standard_user', 'secret_sauce')
            await expect(InventoryPage.pageTitle).toHaveText("Products")
            await InventoryPage.itemAdd(product_name)
            await expect(InventoryPage.cartBage).toHaveText('1')
            await InventoryPage.clickCartLink()
            await expect(CartPage.itemName).toHaveText(product_name)
            const itemPrice = await CartPage.savePrice()
            await CartPage.clickCheckout()
            await expect(CheckoutOnePage.pageTitle).toHaveText('Checkout: Your Information')
            await CheckoutOnePage.checkoutStepOne(firstName, lastName, Zip);
            await expect(CheckoutOverviewPage.pageTitle).toHaveText('Checkout: Overview');
            const totalPrice = await CheckoutOverviewPage.saveTotal();
            if (parseFloat(totalPrice) === parseFloat(itemPrice)) {
                console.log('Total price verified as expected');
            } else {
                throw new Error(`Total price verification failed! Expected: ${itemPrice}, but got: ${totalPrice}`);
            }
        } catch (err) {
            console.error('Error occurred:', err);
            errorOccurred = true;
        } finally {
            try {
                await CheckoutOverviewPage.pressFinish();
                await expect(CheckoutCompletePage.pageHeader).toHaveText('Thank you for your order!');
                await CheckoutCompletePage.pressBackHome();
                await expect(InventoryPage.pageTitle).toHaveText('Products');
            } catch (finalErr) {
                console.error('Error occurred during final steps:', finalErr);
                errorOccurred = true;
            }

            if (errorOccurred) {
                throw new Error('Checkout validation failed! Total price doesn`t equal to price of products added to the cart.');
            }
        }
    });
});