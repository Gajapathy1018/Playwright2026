import { test, expect } from '../../fixtures/pageFixtures'

test('Verify the new window opens correctly', async ({ page, context, sbiPage }) => {
    await page.goto('https://retail.sbi.bank.in/retail/login.htm');
    await page.waitForLoadState('load');
    await sbiPage.clickContinueButton();
    //switching to new window
    const [newWindow] = await Promise.all([
        context.waitForEvent('page'),
        sbiPage.newUserButton.click()
    ]);
    await newWindow.waitForLoadState('load');
    await expect(newWindow).toHaveTitle('State Bank of India - New User Registration');
    await newWindow.getByText('New User Registration', { exact: true }).click();
    //performing actions in old window
    await page.getByRole('button', { name: 'Login' }).click()

})
