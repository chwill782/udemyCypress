import BasePage from "./BasePage"

class ProductsPage extends BasePage {
    addBackpackToCart() {
        this.clickElement('[id="add-to-cart-sauce-labs-backpack"]')
    }

    openCart() {
        this.clickElement('[data-test="shopping-cart-link"]')
    }
}

export default new ProductsPage()