import { PaymentDoneComponent } from "../components/payment/payment-done.component";
import BasePage from "./base.page";

export class PaymentDonePage extends BasePage {
  paymentDone: PaymentDoneComponent = new PaymentDoneComponent();

  constructor() {
    super("/payment_done/500"); 
  }

  validateSuccessMessage(
    orderPlacedMessage: string,
    orderConfirmedMessage: string
  ) {
    cy.log(`Validate success message`);
    this.paymentDone.titleOrderPlaced.contains(orderPlacedMessage); 
    this.paymentDone.paragraphOrderConfirmed.contains(
      orderConfirmedMessage 
    );
  }

  clickOnDeleteAccount() {
    cy.log(`Click on Delete Account button`);
    this.header.deleteAccount.click(); 
  }
}
