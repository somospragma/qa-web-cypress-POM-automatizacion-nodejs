export default class NotificationComponent {

  get continueShoppingBtn() {
    return cy.get(".modal-footer > .btn");
  }
  get addedToCartMessage() {
    return cy.get(".modal-body > :nth-child(1)");
  }

  get cartBtn() {
    return cy.get("div.modal-body>p>a[href='/view_cart']");
  }
}
