import NotificationComponent from "../components/cart/add-to-cart-notification.component";
import { HomeComponent } from "../components/home/home.component";
import BasePage from "./base.page";

export class HomePage extends BasePage {
  home: HomeComponent = new HomeComponent();
  notification: NotificationComponent = new NotificationComponent();

  constructor() {
    super("/"); 
  }

  addToCartClick() {
    cy.log(`Click the first product to add to the cart`);
    this.home.firstProduct.click();
  }

  clickToCartBtn() {
    cy.log(`Click to cart button`);
    this.notification.cartBtn.click();
  }

  verifyLoggedAsUsername(username: string) {
    
    this.header.loggedAsUsername
      .should("be.visible")
      .contains(`Logged in as ${username}`, { timeout: 10000 });
  }

  clickToCartAtHeader() {
    this.header.cart.click();
  }
}
