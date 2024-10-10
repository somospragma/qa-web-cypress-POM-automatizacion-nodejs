const BasePage = require("./base.page");

class HomePage extends BasePage {
  constructor() {
    super("/");
  }

  // Click en el primer producto para añadir al carrito
  addToCartClick() {
    this.home.firstProduct.click();
  }
}

export default HomePage;
