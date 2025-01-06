import { AccountMessages } from "@/utils/models/account.model";
import BasePage from "./base.page";
export class AccountCreatedPage extends BasePage {

  get createdAccountTitle() {
    return cy.get("[data-qa='account-created']");
  }

  get createdAccountFirstParagraph() {
    return cy.get("[data-qa='account-created'] + p");
  }

  get createdAccountSecondParagraph() {
    return cy.get("#form p:nth-child(3)");
  }

  get continueBtn() {
    return cy.get("[data-qa='continue-button']");
  }

  validateMessages(messages: AccountMessages) {
    const { accountCreated, congratulations, privileges } = messages;
    this.createdAccountTitle.invoke("text").should("equal", accountCreated);

    this.createdAccountFirstParagraph
      .invoke("text")
      .should("equal", congratulations);

    this.createdAccountSecondParagraph
      .invoke("text")
      .should("equal", privileges);
  }

  clickOnContinueBtn() {
    this.continueBtn
      .should("have.attr", "href", "/")
      .and("have.text", "Continue")
      .click();
  }
}

