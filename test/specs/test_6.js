import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Sotring validation | ', () => {
    it('Filters works as expected', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.pageTitle).toHaveText("Products")
        const options_list = [
            { val: 'az', txt: 'Name (A to Z)' },
            { val: 'za', txt: 'Name (Z to A)' },
            { val: 'lohi', txt: 'Price (low to high)' },
            { val: 'hilo', txt: 'Price (high to low)' }
        ];
        for (const option of options_list) {
            await InventoryPage.clickOption(option.val);
            await expect(InventoryPage.activeOption).toHaveText(option.txt);
        }
    })
})

