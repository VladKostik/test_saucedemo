import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Logout validation |', () => {
    it('Should logout as expected', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.pageTitle).toHaveText("Products")
        await InventoryPage.logout()
        await expect(LoginPage.loginBtn).toBeDisplayed()
    })
})

