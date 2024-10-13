const BasePage = require("./base.page");

class CartPage extends BasePage {
  constructor() {
    super("/view_cart");
  }

  verifyCartPageisVisible() {
    cy.url().should("include", "/view_cart");
    this.cart.breadCrumbSC.contains("Shopping Cart").should("be.visible");
  }

  clickToProceedCheckoutBtn() {
    this.cart.proceedCheckoutBtn.click();
  }

  clickToRegisterOrLoginBtn() {
    this.checkout.registerOrLoginBtn.click();
  }
}

module.exports = CartPage;
