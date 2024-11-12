class PaymentComponent {
  get nameOnCardInput() {
    return cy.get("input[name='name_on_card']");
  }

  get cardNumberInput() {
    return cy.get("input[name='card_number']");
  }

  get cvcInput() {
    return cy.get("input[name='cvc']");
  }

  get expirationMonthInput() {
    return cy.get("input[name='expiry_month']");
  }

  get expirationYearInput() {
    return cy.get("input[name='expiry_year']");
  }

  get payAndConfirmOrderBtn() {
    return cy.get("button#submit");
  }
}

module.exports = PaymentComponent;
