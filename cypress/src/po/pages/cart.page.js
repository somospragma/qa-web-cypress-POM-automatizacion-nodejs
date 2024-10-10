const BasePage = require("./base.page");

class CartPage extends BasePage {
  constructor() {
    super("/view_cart");
  }

  verifyCartPageisVisible() {
    cy.url().should("include", "/view_cart");
    this.cart.breadCrumbSC.contains("Shopping Cart").should("be.visible");
  }
}

module.exports = CartPage;
