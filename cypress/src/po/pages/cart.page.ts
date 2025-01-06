import { CheckoutNotificationComponent } from "../components/checkout/checkout-notification.component";
import { CartComponent } from "../components/cart/cart.component";
import BasePage from "./base.page";

export class CartPage extends BasePage {
  cart: CartComponent = new CartComponent();
  checkout: CheckoutNotificationComponent = new CheckoutNotificationComponent();

  constructor() {
    super("/view_cart"); 
  }

  verifyCartPageIsVisible() {
    cy.log("Verify that the Cart page is visible");
    cy.url().should("include", "/view_cart");
    this.cart.breadcrumbShoppingCart
      .contains("Shopping Cart")
      .should("be.visible");
  }

  clickToProceedCheckoutBtn() {
    cy.log("Click the 'Proceed to Checkout' button");
    this.cart.proceedCheckoutBtn.click();
  }

  clickToRegisterOrLoginBtn() {
    cy.log("Click the 'Register or Login' button");
    this.checkout.registerOrLoginBtn.click();
  }
}
