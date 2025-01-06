export default class CheckoutCardComponent {
  constructor(private _rootSelector: string) {}

  get fullName() {
    return cy.get(
      `${this._rootSelector} > .address_firstname.address_lastname`
    );
  }

  get company() {
    return cy.get(`${this._rootSelector} > li:nth-child(3).address_address1`);
  }

  get addressOne() {
    return cy.get(`${this._rootSelector} > li:nth-child(4).address_address1`);
  }

  get addressTwo() {
    return cy.get(`${this._rootSelector} > li:nth-child(5).address_address1`);
  }

  get stateCityAndPostcode() {
    return cy.get(
      `${this._rootSelector} > .address_city.address_state_name.address_postcode`
    );
  }

  get country() {
    return cy.get(`${this._rootSelector} > .address_country_name`);
  }

  get mobileNumber() {
    return cy.get(`${this._rootSelector} > .address_phone`);
  }
}
