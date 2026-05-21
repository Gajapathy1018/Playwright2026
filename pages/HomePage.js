class HomePage {
    constructor(page) {
        this.page = page;
        this.acceptCookiesButton = page.getByTestId('accept-all')
        this.signInButton = page.locator('[data-test="loginAnchor"]');
    }
    async acceptCookies() {
        await this.acceptCookiesButton.click();
    }
    async signIn() {
        await this.signInButton.click();
    }
}
module.exports = HomePage