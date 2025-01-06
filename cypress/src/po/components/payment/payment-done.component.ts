export class PaymentDoneComponent {
  get titleOrderPlaced() {
    return cy.get("h2[data-qa='order-placed']");
  }

  get paragraphOrderConfirmed() {
    return cy.get("h2[data-qa='order-placed'] + p");
  }
}
