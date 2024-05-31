import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Checkout without products validation | ', () => {
    it('Error message expected when checkout with empty cart', async () => {
        let errorOccurred = false;

        try {
            await LoginPage.open();
            await LoginPage.login('standard_user', 'secret_sauce');
            await expect(InventoryPage.pageTitle).toBeExisting();
            await expect(InventoryPage.pageTitle).toHaveText('Products');
            await InventoryPage.clickCartLink();
            await expect(CartPage.pageTitle).toHaveText('Your Cart');
            await CartPage.clickCheckout();
            await expect(CartPage.pageTitle).toHaveText('Your Cart');
        } catch (error) {
            console.error('Error: Checkout proceeded with an empty cart or another error occurred.', error);
            errorOccurred = true;
        } finally {
            if (errorOccurred) {
                throw new Error('Validation failed! No Error massage occured when checkout with empty cart.');
            }
        }
    });
});
