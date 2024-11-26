import BasePage from "./base.page";

export class AccountCreatedPage extends BasePage {
  // Property for the title element after account creation
  get createdAccountTitle() {
    return cy.get("[data-qa='account-created']");
  }

  // Property for the first paragraph following the created account title
  get createdAccFirstParagraph() {
    return cy.get("[data-qa='account-created'] + p");
  }

  // Property for the second paragraph in the form
  get createdAccSecondParagraph() {
    return cy.get("#form p:nth-child(3)");
  }

  // Property for the 'Continue' button
  get continueBtn() {
    return cy.get("[data-qa='continue-button']");
  }

  // Method to validate account creation messages
  validateMessage() {
    this.createdAccountTitle.invoke("text").should("equal", "Account Created!");

    this.createdAccFirstParagraph
      .invoke("text")
      .should(
        "equal",
        "Congratulations! Your new account has been successfully created!"
      );

    this.createdAccSecondParagraph
      .invoke("text")
      .should(
        "equal",
        "You can now take advantage of member privileges to enhance your online shopping experience with us."
      );
  }

  // Method to click on the 'Continue' button after validation
  clickOnContinueBtn() {
    this.continueBtn
      .should("have.attr", "href", "/")
      .and("have.text", "Continue")
      .click();
  }
}

// Uncomment to export if needed
// export default AccountCreatedPage;
