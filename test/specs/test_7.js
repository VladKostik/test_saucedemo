import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Verify social media links | ', () => {
    it('Correct social media pages should run', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.pageTitle).toHaveText("Products");

        const social_list = [
            { name: 'twitter', url: 'https://x.com/saucelabs' },
            { name: 'facebook', url: 'https://www.facebook.com/saucelabs' },
            { name: 'linkedin', url: 'https://www.linkedin.com/company/sauce-labs/' }
        ];
        const origWindowHandle = await browser.getWindowHandle();

        for (const social of social_list) {
            await InventoryPage.openSocial(social.name);

            const allTabHandles = await browser.getWindowHandles();
            const newTabHandle = allTabHandles.find(handle => handle !== origWindowHandle);

            if (newTabHandle) {
                await browser.switchToWindow(newTabHandle);
                await browser.pause(8000);

                const newTabUrl = await browser.getUrl();
                expect(newTabUrl).toBe(social.url);

                await browser.closeWindow();
                await browser.switchToWindow(origWindowHandle);
            } else {
                throw new Error(`New tab for ${social.name} not found`);
            }
        }
    });
});
