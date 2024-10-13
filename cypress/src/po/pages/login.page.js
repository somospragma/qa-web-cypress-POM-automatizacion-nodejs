const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/login");
  }

  verifyLoginPageisVisible() {
    cy.url().should("include", "/login");
  }

  enterName() {
    this.login.inputName.type("user1");
  }

  enterEmail() {
    this.login.inputEmail.type("uS@correo.com");
  }

  clickOnSinUp() {
    this.login.singUpBtn.click();
  }
}

module.exports = LoginPage;
