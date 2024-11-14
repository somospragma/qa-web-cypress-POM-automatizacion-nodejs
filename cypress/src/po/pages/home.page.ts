import BasePage from "./base.page";

export class HomePage extends BasePage {
  constructor() {
    super("/"); // Set the path for the Home page
  }

  // Method to click the first product to add to the cart
  addToCartClick() {
    cy.log(`Click the first product to add to the cart`);
    this.home.firstProduct.click();
  }

  // Method to click the cart button
  clickToCartBtn() {
    cy.log(`Click to cart button`);
    this.notification.cartBtn.click();
  }

  // Method to verify the logged in username
  verifyLoggedAsUsername() {
    this.header.loggedAsUsername
      .should("be.visible")
      .contains("Logged in as user1", { timeout: 10000 });
  }

  // Method to click the cart button in the header
  clickToCartAtHeader() {
    this.header.cart.click();
  }
}
