import BasePage from "./base.page";

export class LoginPage extends BasePage {
  constructor() {
    super("/login"); // Set the path for the Login page
  }

  // Method to verify if the Login page is visible
  verifyLoginPageisVisible() {
    cy.log(`Verify that LoginPage is visible`);
    cy.url().should("include", "/login"); // Check that the URL includes '/login'
  }

  // Method to enter the username into the name field
  enterName() {
    cy.log(`Enter the name into placeholder`);
    this.login.inputName.type("user1"); // Type 'user1' into the name input field
  }

  // Method to enter a random email into the email field
  enterEmail() {
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@correo.com`; // Generate a random email
    cy.log(`Enter the email: ${randomEmail}`);
    this.login.inputEmail.type(randomEmail); // Type the random email into the email input field
  }

  // Method to click the Sign Up button
  clickOnSinUp() {
    cy.log(`Click to SignUp Button`);
    this.login.singUpBtn.click(); // Click the Sign Up button
  }
}
