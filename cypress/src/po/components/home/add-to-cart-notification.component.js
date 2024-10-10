class NotificationComponent {
  // Btn to continue shopping
  get continueShopingBtn() {
    return cy.get(".modal-footer > .btn");
  }
  // Message about the product added to teh cart
  get addedToCartMessage() {
    return cy.get(".modal-body > :nth-child(1)");
  }

  // Cart Button
  get cartBtn() {
    return cy.get("div.modal-body>p>a[href='/view_cart']");
  }
}

module.exports = NotificationComponent;
