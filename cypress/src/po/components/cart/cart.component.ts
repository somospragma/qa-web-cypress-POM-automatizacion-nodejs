export class CartComponent {
  // second element from breadcrumb
  get breadcrumbShoppingCart() {
    return cy.get("ol.breadcrumb >li:nth-child(2)");
  }

  // Element for button to proceed checkout
  get proceedCheckoutBtn() {
    return cy.get("section[id='do_action'] a.btn.check_out");
  }
}
