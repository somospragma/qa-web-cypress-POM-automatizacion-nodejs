class CheckoutComponent {
  //delivery address
  get deliveryName() {
    return cy.get("#address_delivery > .address_firstname");
  }

  get deliveryLastName() {
    return cy.get("#address_delivery > .address_firstname");
  }

  get deliveryCompany() {
    return cy.get("#address_delivery > li:nth-child(3).address_address1");
  }

  get deliveryAddress1() {
    return cy.get("#address_delivery > li:nth-child(4).address_address1");
  }

  get deliveryAddress2() {
    return cy.get("#address_delivery > li:nth-child(5).address_address1");
  }

  get deliveryCity() {
    return cy.get(
      "#address_delivery > .address_city.address_state_name.address_postcode"
    );
  }

  get deliveryState() {
    return cy.get(
      "#address_delivery > .address_city.address_state_name.address_postcode "
    );
  }

  get deliveryZipcode() {
    return cy.get(
      "#address_delivery > .address_city.address_state_name.address_postcode "
    );
  }
  get deliveryCountry() {
    return cy.get("#address_delivery > .address_country_name");
  }
  get deliveryMobileNumber() {
    return cy.get("#address_delivery > .address_phone");
  }

  //Billing address
  get billingName() {
    return cy.get("#address_invoice > .address_firstname");
  }

  get billingLastName() {
    return cy.get("#address_invoice > .address_firstname");
  }

  get billingCompany() {
    return cy.get("#address_invoice > li:nth-child(3).address_address1 ");
  }

  get billingAddress1() {
    return cy.get("#address_invoice > li:nth-child(4).address_address1 ");
  }

  get billingAddress2() {
    return cy.get("#address_invoice > li:nth-child(5).address_address1");
  }

  get deliveryCity() {
    return cy.get(
      "#address_invoice > .address_city.address_state_name.address_postcode"
    );
  }

  get deliveryState() {
    return cy.get(
      "#address_invoice > .address_city.address_state_name.address_postcode "
    );
  }

  get deliveryZipcode() {
    return cy.get(
      "#address_invoice > .address_city.address_state_name.address_postcode "
    );
  }
  get deliveryCountry() {
    return cy.get("#address_invoice > .address_country_name");
  }
  get deliveryMobileNumber() {
    return cy.get("#address_invoice > .address_phone");
  }

  get item() {
    return cy.get("#product-1 a img");
  }

  get description() {
    return cy.get("#product-1 h4 a");
  }

  get price() {
    return cy.get("#product-1 .cart_price");
  }

  get quantity() {
    return cy.get("#product-1 .cart_quantity");
  }

  get totalPrice() {
    return cy.get("#product-1 .cart_total_price");
  }

  get totalAmount() {
    return cy.get("tr:nth-child(2) p.cart_total_price");
  }

  get messageTextArea() {
    return cy.get('textarea[name="message"]');
  }

  get placeOrderBtn() {
    return cy.get("a[href='/payment']");
  }
}

module.exports = CheckoutComponent;
