import BasePage from "./BasePage"

class LoginPage extends BasePage {
    visit() {
        cy.visit("https://www.saucedemo.com/")
    }

    enterUsername(username) {
        this.typeText('[id="user-name"]', username)
    }

    enterPassword(password) {
        this.typeText('[id="password"]', password)
    }

    clickLogin() {
        this.clickElement('[id="login-button"]')
    }

    loginUser(username, password) {
        this.visit()
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogin()
    }

}
export default new LoginPage()