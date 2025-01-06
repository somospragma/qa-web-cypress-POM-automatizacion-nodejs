export default class OrderSummaryComponent {
  constructor(private _rootSelector: string) {}

  get item() {
    return cy.get(`${this._rootSelector} a img`);
  }

  get description() {
    return cy.get(`${this._rootSelector} h4 a`);
  }

  get price() {
    return cy.get(`${this._rootSelector} .cart_price`);
  }

  get quantity() {
    return cy.get(`${this._rootSelector} .cart_quantity`);
  }

  get totalPrice() {
    return cy.get(`${this._rootSelector} .cart_total_price`);
  }

  get totalAmount() {
    return cy.get(`tr:nth-child(2) p.cart_total_price`);
  }
}
