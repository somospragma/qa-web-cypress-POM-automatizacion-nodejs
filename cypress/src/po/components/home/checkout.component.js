class CheckoutComponent {
  //delivery address
  get deliveryName() {
    return cy.get("#address_delivery > .address_firstname");
  }
  get deliveryCompany() {
    return cy.get("#address_delivery > li:nth-child(3).address_address1 ");
  }

  get deliveryAddress1() {
    return cy.get("#address_delivery > li:nth-child(4).address_address1 ");
  }

  //Billing address
  get billingName() {
    return cy.get("#address_invoice > .address_firstname");
  }

  get billingCompany() {
    return cy.get("#address_invoice > li:nth-child(3).address_address1 ");
  }

  get billingAddress1() {
    return cy.get("#address_invoice > li:nth-child(4).address_address1 ");
  }
}

module.exports = CheckoutComponent;
