import { test, expect } from '../../fixtures/pageFixtures'


test('Verify the SignIn button and title of the home page', async ({ page, homePage }) => {
    await page.goto('https://www.waitrose.com');
    await page.waitForLoadState('load');
    await homePage.acceptCookies();
    await expect(page).toHaveTitle('Waitrose & Partners | Food | Drink | Recipes');
    await homePage.signIn();
    await page.waitForLoadState('load');
})