import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Login with invalid password | ', () => {
    it('Should not login with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'password')
        await expect(LoginPage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})

