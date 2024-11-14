import BasePage from "./base.page";

export class CartPage extends BasePage {
  constructor() {
    super("/view_cart"); // Set path for the Cart page
  }

  // Method to verify that the Cart page is visible
  verifyCartPageIsVisible() {
    cy.log("Verify that the Cart page is visible");
    cy.url().should("include", "/view_cart");
    this.cart.breadCrumbSC.contains("Shopping Cart").should("be.visible");
  }

  // Method to click the "Proceed to Checkout" button
  clickToProceedCheckoutBtn() {
    cy.log("Click the 'Proceed to Checkout' button");
    this.cart.proceedCheckoutBtn.click();
  }

  // Method to click the "Register or Login" button
  clickToRegisterOrLoginBtn() {
    cy.log("Click the 'Register or Login' button");
    this.checkout.registerOrLoginBtn.click();
  }
}
