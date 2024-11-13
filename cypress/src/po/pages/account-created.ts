import BasePage from  "./base.page";

export class AccountCreatedPage extends BasePage {
  get createdAccountTitle() {
    return cy.get("[data-qa='account-created']");
  }

  get createdAccFirstParagraph() {
    return cy.get("[data-qa='account-created'] + p");
  }

  get createdAccSecondParagraph() {
    return cy.get("#form p:nth-child(3)");
  }

  get continueBtn() {
    return cy.get("[data-qa='continue-button']");
  }

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

  clickOnContinueBtn() {
    this.continueBtn
      .should("have.attr", "href", "/")
      .and("have.text", "Continue")
      .click();
  }
}

//module.exportss = AccountCreatedPage;
