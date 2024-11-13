import BasePage from  "./base.page";

export class CartPage extends BasePage {
  constructor() {
    super("/view_cart");
  }

  verifyCartPageisVisible() {
    cy.log(`Verify that cartPage is visible`);
    cy.url().should("include", "/view_cart");
    this.cart.breadCrumbSC.contains("Shopping Cart").should("be.visible");
  }

  clickToProceedCheckoutBtn() {
    cy.log(`Click to proceed checkout button`);
    this.cart.proceedCheckoutBtn.click();
  }

  clickToRegisterOrLoginBtn() {
    cy.log(`Click to register login button`);
    this.checkout.registerOrLoginBtn.click();
  }
}

//module.exportss = CartPage;
