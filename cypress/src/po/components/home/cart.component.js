class CartComponent {
  // second elemento from breadcrumb
  get breadCrumbSC() {
    return cy.get("ol.breadcrumb >li:nth-child(2)");
  }
}

module.exports = CartComponent;
