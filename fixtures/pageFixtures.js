import { test as base } from '@playwright/test';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';
import SBIPage from '../pages/SBIPage';

export const test = base.extend({
    homePage: async ({ page }, use) => {
        use(new HomePage(page))
    },
    loginPage: async ({ page }, use) => {
        use(new LoginPage(page))
    },
    searchPage: async ({ page }, use) => {
        use(new SearchPage(page))
    },
    sbiPage: async ({ page }, use) => {
        use(new SBIPage(page))
    }
})
export { expect } from '@playwright/test';