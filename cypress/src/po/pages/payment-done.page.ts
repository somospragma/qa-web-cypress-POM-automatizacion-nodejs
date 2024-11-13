import BasePage from  "./base.page";

export class PaymentDonePage extends BasePage {
  constructor() {
    super("/payment_done/500");
  }

  validateSuccessMessage() {
    this.paymentDone.titleOrderPlaced.contains("Order Placed!");
    this.paymentDone.paragraphOrderConfirmed.contains(
      "Congratulations! Your order has been confirmed!"
    );
  }

  clickOnDeleteAccount() {
    this.header.deleteAccount.click();
  }
}

//module.exportss = PaymentDonePage;
