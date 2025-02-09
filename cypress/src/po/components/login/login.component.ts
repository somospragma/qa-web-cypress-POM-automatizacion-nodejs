export class LoginComponent {

  get inputName() {
    return cy.get("input[data-qa='signup-name']");
  }

  get inputEmail() {
    return cy.get("input[data-qa='signup-email']");
  }

  get singUpBtn() {
    return cy.get("button[data-qa='signup-button']");
  }
}
