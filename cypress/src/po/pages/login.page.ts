import BasePage from  "./base.page";

export class LoginPage extends BasePage {
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
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@correo.com`;
    cy.log(`Enter the email: ${randomEmail}`);
    this.login.inputEmail.type(randomEmail);
  }

  clickOnSinUp() {
    cy.log(`Click to SignUp Button`);
    this.login.singUpBtn.click();
  }
}

//module.exportss = LoginPage;
