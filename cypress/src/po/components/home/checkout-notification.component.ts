export class CheckoutNotificationComponent {
  // checkout btn
  get registerOrLoginBtn() {
    return cy.get("a[href='/login'] u");
  }
}


