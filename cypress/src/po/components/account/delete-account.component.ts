export class DeleteAccountComponent {
  get accountDeletedTitle() {
    return cy.get("h2[data-qa='account-deleted']");
  }

  get accountDeletedFirstParagraph() {
    return cy.get("h2[data-qa='account-deleted'] + p");
  }

  get accountDeletedSecondParagraph() {
    return cy.get("h2[data-qa='account-deleted'] ~ p:nth-child(3)");
  }

  get continueBtn() {
    return cy.get("[data-qa='continue-button']");
  }
}
