import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Login with invalid username | ', () => {
    it('Should not login with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standarD_user', 'secret_sauce')
        await expect(LoginPage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})

