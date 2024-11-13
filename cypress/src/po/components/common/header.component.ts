
export class HeaderComponent {
  get loggedAsUsername() {
    return cy.get("#header li:nth-child(10) a");
  }

  get cart() {
    return cy.get("#header li:nth-child(3) a");
  }

  get deleteAccount() {
    return cy.get("a[href='/delete_account']");
  }
}


