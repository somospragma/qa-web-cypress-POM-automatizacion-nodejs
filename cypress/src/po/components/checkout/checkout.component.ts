import CheckoutCardComponent from "./checkout-card.component";
import OrderSummaryComponent from "./order-summary.component";

export class CheckoutComponent {
  
  deliveryCard!: CheckoutCardComponent;
  billingCard!: CheckoutCardComponent;
  orderSummary!: OrderSummaryComponent;

  constructor() {
    this.deliveryCard = new CheckoutCardComponent("#address_delivery");
    this.billingCard = new CheckoutCardComponent("#address_invoice");
    this.orderSummary = new OrderSummaryComponent("#product-1");
  }

  get messageTextArea() {
    return cy.get('textarea[name="message"]');
  }

  get placeOrderBtn() {
    return cy.get("a[href='/payment']");
  }
}
