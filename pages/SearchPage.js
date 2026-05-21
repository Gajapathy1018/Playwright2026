class SearchPage {
    constructor(page) {
        this.page = page,
            this.searchInput = page.locator('input[name="search"]'),
            this.searchButton = page.locator('button[type="submit"]')
    }
    async searchForItem(item) {
        await this.searchInput.fill(item);
        await this.searchButton.click();
    }
}
module.exports = { SearchPage }