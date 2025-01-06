export class CheckoutNotificationComponent {
  
  get registerOrLoginBtn() {
    return cy.get("a[href='/login'] u");
  }
}


