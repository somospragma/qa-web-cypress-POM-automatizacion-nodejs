const NotificationComponent = require("../components/home/add-to-cart-notification.component");
const HomeComponent = require("../components/home/home.component");
const CartComponent = require("../components/home/cart.component");

class BasePage {
  constructor(path) {
    this.path = path || ""; // Ruta relativa si no se pasa ninguna
    this.home = new HomeComponent();
    this.notification = new NotificationComponent();
    this.cart = new CartComponent();
  }

  open() {
    return cy.visit(this.path); // Visitar la URL base + la ruta
  }
}

module.exports = BasePage;
