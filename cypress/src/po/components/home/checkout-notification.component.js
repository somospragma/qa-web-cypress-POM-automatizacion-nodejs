class CheckoutComponent {
  // checkout btn
  get registerOrLoginBtn() {
    return cy.get("a[href='/login'] u");
  }
}

module.exports = CheckoutComponent;
