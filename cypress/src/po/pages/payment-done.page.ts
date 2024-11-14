import BasePage from "./base.page";

export class PaymentDonePage extends BasePage {
  constructor() {
    super("/payment_done/500"); // Set the path for the payment confirmation page
  }

  // Method to validate the success message on the Payment Done page
  validateSuccessMessage() {
    cy.log(`Validate success message`);
    this.paymentDone.titleOrderPlaced.contains("Order Placed!"); // Check if the order placed message is visible
    this.paymentDone.paragraphOrderConfirmed.contains(
      "Congratulations! Your order has been confirmed!" // Check if the order confirmation message is visible
    );
  }

  // Method to click on the Delete Account button from the header
  clickOnDeleteAccount() {
    cy.log(`Click on Delete Account button`);
    this.header.deleteAccount.click(); // Click the 'Delete Account' button from the header
  }
}
