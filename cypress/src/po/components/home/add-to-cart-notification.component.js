const BaseComponent = require("../common/base.component.js");

class NotificationComponent extends BaseComponent {
  constructor() {
    super("div.modal-content");
  }

  get continueShopingBtn() {
    return cy.get(".modal-footer > .btn");
  }

  get addedToCartMessage() {
    return cy.get(".modal-body > :nth-child(1)");
  }
}

module.exports = NotificationComponent;
