class DeleteAccountComponent {
  get accountDeletedTitle() {
    return cy.get("h2[data-qa='account-deleted']");
  }

  get accountDeletedFirstparagraph() {
    return cy.get("h2[data-qa='account-deleted'] + p");
  }

  get accountDeletedSecondparagraph() {
    return cy.get("h2[data-qa='account-deleted'] ~ p:nth-child(3)");
  }

  get continueBtn() {
    return cy.get("[data-qa='continue-button']");
  }
}

module.exports = DeleteAccountComponent;
