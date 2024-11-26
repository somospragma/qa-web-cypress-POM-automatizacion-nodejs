export class CartComponent {
  // second element from breadcrumb
  get breadCrumbSC() {
    return cy.get("ol.breadcrumb >li:nth-child(2)");
  }

  // Element for button to poceed checkout
  get proceedCheckoutBtn() {
    return cy.get("section[id='do_action'] a.btn.check_out");
  }
}

//module.exportss = CartComponent;
