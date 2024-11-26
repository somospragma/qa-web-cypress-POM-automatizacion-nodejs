export class DeleteAccountComponent {
  // Property for the title element displayed after account deletion
  get accountDeletedTitle() {
    return cy.get("h2[data-qa='account-deleted']");
  }

  // Property for the first paragraph following the deleted account title
  get accountDeletedFirstParagraph() {
    return cy.get("h2[data-qa='account-deleted'] + p");
  }

  // Property for the second paragraph sibling of the deleted account title
  get accountDeletedSecondParagraph() {
    return cy.get("h2[data-qa='account-deleted'] ~ p:nth-child(3)");
  }

  // Property for the 'Continue' button
  get continueBtn() {
    return cy.get("[data-qa='continue-button']");
  }
}
