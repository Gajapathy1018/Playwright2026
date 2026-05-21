class HomePage {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('text=Sign In');
    }
    async signIn() {
        await this.signInButton.click();
    }
}
module.exports = HomePage