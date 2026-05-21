class LoginPage {
    constructor(page) {
        this.page = page,
            this.username = page.locator(),
            this.password = page.locator(),
            this.submit = page.locator()
    }
    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }
}
module.exports = LoginPage;