export class HeaderComponent {
  // Property for the logged-in username element
  get loggedAsUsername() {
    return cy.get("#header li:nth-child(10) a");
  }

  // Property for the cart element
  get cart() {
    return cy.get("#header li:nth-child(3) a");
  }

  // Property for the delete account link
  get deleteAccount() {
    return cy.get("a[href='/delete_account']");
  }
}
