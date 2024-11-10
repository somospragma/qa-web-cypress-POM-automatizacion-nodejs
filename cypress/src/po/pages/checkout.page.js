const BasePage = require("./base.page");

class CheckoutPage extends BasePage {
  constructor() {
    super("/checkout");
  }

  verifyDeliveryDetails() {
    this.checkoutAddress.deliveryName.contains("Juan");
    this.checkoutAddress.deliveryCompany.contains("Pragma");
    this.checkoutAddress.deliveryAddress1.contains("cra44#26");
  }

  verifyBillingDetails() {
    this.checkoutAddress.billingName.contains("Juan");
    this.checkoutAddress.billingCompany.contains("Pragma");
    this.checkoutAddress.billingAddress1.contains("cra44#26");
  }
}

module.exports = CheckoutPage;
