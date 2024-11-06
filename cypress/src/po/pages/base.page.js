const NotificationComponent = require("../components/home/add-to-cart-notification.component");
const HomeComponent = require("../components/home/home.component");
const CartComponent = require("../components/home/cart.component");
const CheckoutComponent = require("../components/home/checkout-notification.component");
const LoginComponent = require("../components/home/login.component");
const AccountComponent = require("../components/home/account-information.component");

class BasePage {
  constructor(path) {
    this.path = path || ""; // Ruta relativa si no se pasa ninguna
    this.home = new HomeComponent();
    this.notification = new NotificationComponent();
    this.cart = new CartComponent();
    this.checkout = new CheckoutComponent();
    this.login = new LoginComponent();
    this.account = new AccountComponent();
  }

  open() {
    cy.log(`Visit the page https://www.automationexercise.com${this.path}`);
    return cy.visit(this.path); // Visitar la URL base + la ruta
  }
}

module.exports = BasePage;
