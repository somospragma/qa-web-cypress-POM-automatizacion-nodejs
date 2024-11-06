const BasePage = require("./base.page");

class HomePage extends BasePage {
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
}

export default HomePage;
