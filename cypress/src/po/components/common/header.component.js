class HeaderComponent {
  get loggedAsUsername() {
    return cy.get("#header li:nth-child(10) a");
  }

  get cart() {
    return cy.get("#header li:nth-child(3) a");
  }
}

module.exports = HeaderComponent;
