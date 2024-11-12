const BasePage = require("./base.page");

class CheckoutPage extends BasePage {
  constructor() {
    super("/checkout");
  }

  verifyDeliveryDetails() {
    this.checkoutAddress.deliveryName.contains("Juan");
    this.checkoutAddress.deliveryLastName.contains("Aguirre");
    this.checkoutAddress.deliveryCompany.contains("Pragma");
    this.checkoutAddress.deliveryAddress1.contains("cra44#26");
    this.checkoutAddress.deliveryAddress2.contains("cll#24");
    this.checkoutAddress.deliveryCity.contains("Sabaneta");
    this.checkoutAddress.deliveryState.contains("Antioquia");
    this.checkoutAddress.deliveryZipcode.contains("321");
    this.checkoutAddress.deliveryMobileNumber.contains("321");
  }

  verifyBillingDetails() {
    this.checkoutAddress.billingName.contains("Juan");
    this.checkoutAddress.billingLastName.contains("Aguirre");
    this.checkoutAddress.billingCompany.contains("Pragma");
    this.checkoutAddress.billingAddress1.contains("cra44#26");
    this.checkoutAddress.billingAddress2.contains("cll#24");
    this.checkoutAddress.deliveryCity.contains("Sabaneta");
    this.checkoutAddress.deliveryState.contains("Antioquia");
    this.checkoutAddress.deliveryZipcode.contains("321");
    this.checkoutAddress.deliveryCountry.contains("Israel");
    this.checkoutAddress.deliveryMobileNumber.contains("321");
  }

  reviewOrder() {
    this.checkoutAddress.item.should(
      "have.attr",
      "src",
      "get_product_picture/1"
    );
    this.checkoutAddress.description.contains("Blue Top");
    this.checkoutAddress.price.contains("Rs. 500");
    this.checkoutAddress.quantity.contains("1");
    this.checkoutAddress.totalPrice.contains("Rs. 500");
    this.checkoutAddress.totalAmount.contains("Rs. 500");
  }

  enterDescription() {
    this.checkoutAddress.messageTextArea.type("Este es un mensaje de prueba");
  }

  clickOnPlaceOrder() {
    this.checkoutAddress.placeOrderBtn.click();
  }
}

module.exports = CheckoutPage;
