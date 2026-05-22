class SBIPage {
    constructor(page) {
        this.page = page;
        this.continueButton = page.locator('a[class="login_button"]');
        this.newUserButton = page.getByRole('link', { name: 'New User? Register here/' })
    }

    async enterUsername(username) {
        await this.page.fill('#username', username);
    }

    async enterPassword(password) {
        await this.page.fill('#password', password);
    }

    async clickContinueButton() {
        await this.continueButton.first().click();
    }
    async clickNewUserButton() {
        await this.newUserButton.click();
    }
}

export default SBIPage;
