import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Valid login | ', () => {
    it('Should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.pageTitle).toHaveText("Products")
    })
})

