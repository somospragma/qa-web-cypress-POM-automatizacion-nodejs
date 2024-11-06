const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("/login");
  }

  verifyLoginPageisVisible() {
    cy.log(`Verify that LoginPage is visible`);
    cy.url().should("include", "/login");
  }

  enterName() {
    cy.log(`Enter the name into placeholder`);
    this.login.inputName.type("user1");
  }

  enterEmail() {
    cy.log(`Enter the email into placeholder`);
    this.login.inputEmail.type("uS@correo.com");
  }

  clickOnSinUp() {
    cy.log(`Click to SignUp Button`);
    this.login.singUpBtn.click();
  }
}

module.exports = LoginPage;
