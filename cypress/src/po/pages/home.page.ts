import BasePage from  "./base.page";

export class HomePage extends BasePage {
  constructor() {
    super("/");
  }

  // Click the first product to add to the cart
  addToCartClick() {
    cy.log(`Click the first product to add to the cart`);
    this.home.firstProduct.click();
  }

  // Click to cart button
  clickToCartBtn() {
    cy.log(`Click to cart button`);
    this.notification.cartBtn.click();
  }

  // Verify Logged as username
  verifyLoggedAsUsername() {
    this.header.loggedAsUsername
      .should("be.visible")
      .contains("Logged in as user1", { timeout: 10000 });
  }

  //Click to cart at header
  clickToCartAtHeader() {
    this.header.cart.click();
  }
}

export default HomePage;
