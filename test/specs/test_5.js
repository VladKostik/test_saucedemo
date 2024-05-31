import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from "../pageobjects/cart.page.js"

describe('Saving the card after logout | ', (product_name = 'Sauce Labs Backpack') => {
    it('Products should save in cart after logout as expected', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.pageTitle).toHaveText("Products")
        await InventoryPage.itemAdd(product_name)
        await expect(InventoryPage.cartBage).toHaveText('1')
        await InventoryPage.logout()
        await expect(LoginPage.loginBtn).toBeDisplayed()
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.pageTitle).toHaveText("Products")
        await InventoryPage.clickCartLink()
        await expect(CartPage.itemName).toHaveText(product_name)

    })
})