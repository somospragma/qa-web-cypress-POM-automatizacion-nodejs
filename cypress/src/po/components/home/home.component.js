const BaseComponent = require("../common/base.component.js");

class HomeComponent extends BaseComponent {
  constructor() {
    super("div#cartModal");
  }

  // First product selector
  get firstProduct() {
    return cy.get(
      "div.features_items div.col-sm-4:nth-child(3)    a.btn.btn-default.add-to-cart:nth-child(4)"
    );
  }
}

module.exports = HomeComponent;
