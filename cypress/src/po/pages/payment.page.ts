import BasePage from "./base.page";

export class PaymentPage extends BasePage {
  constructor() {
    super("/payment"); // Set the path for the payment page
  }

  // Method to fill payment data
  fillData() {
    cy.log(`Fill payment data`);
    this.payment.nameOnCardInput.type("John"); // Enter the name on the card
    this.payment.cardNumberInput.type("000000123"); // Enter the card number
    this.payment.cvcInput.type("456"); // Enter the card CVC
    this.payment.expirationMonthInput.type("01"); // Enter the expiration month
    this.payment.expirationYearInput.type("2030"); // Enter the expiration year
  }

  // Method to click the 'Pay and Confirm Order' button
  clickOnPayAndConfirmOrderBtn() {
    cy.log(`Click the 'Pay and Confirm Order' button`);
    this.payment.payAndConfirmOrderBtn.click(); // Click on the payment button to confirm the order
  }
}
