class BasePage {

    clickElement(selector) {
        cy.get(selector).click()
    }

    typeText(selector, text) {
        cy.get(selector).type(text)
    }
}

export default BasePage;