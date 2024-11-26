import BasePage from "./base.page";

export class CheckoutPage extends BasePage {
  constructor() {
    super("/checkout"); // Set the path for the Checkout page
  }

  // Method to verify delivery details on the page
  verifyDeliveryDetails() {
    this.checkoutAddress.deliveryName.contains("John");
    this.checkoutAddress.deliveryLastName.contains("Pérez");
    this.checkoutAddress.deliveryCompany.contains("Pragma");
    this.checkoutAddress.deliveryAddress1.contains("cra44#54");
    this.checkoutAddress.deliveryAddress2.contains("cll5#23");
    this.checkoutAddress.deliveryCity.contains("Toronto");
    this.checkoutAddress.deliveryState.contains("Ontario");
    this.checkoutAddress.deliveryZipcode.contains("M5V 3L9");
    this.checkoutAddress.deliveryMobileNumber.contains("+1 416 555 1234");
  }

  // Method to verify billing details on the page
  verifyBillingDetails() {
    this.checkoutAddress.billingName.contains("John");
    this.checkoutAddress.billingLastName.contains("Pérez");
    this.checkoutAddress.billingCompany.contains("Pragma");
    this.checkoutAddress.billingAddress1.contains("cra44#54");
    this.checkoutAddress.billingAddress2.contains("cll5#23");
    this.checkoutAddress.deliveryCity.contains("Toronto");
    this.checkoutAddress.deliveryState.contains("Ontario");
    this.checkoutAddress.deliveryZipcode.contains("M5V 3L9");
    this.checkoutAddress.deliveryCountry.contains("Canada");
    this.checkoutAddress.deliveryMobileNumber.contains("+1 416 555 1234");
  }

  // Method to review order details on the page
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

  // Method to enter a message in the description textarea
  enterDescription() {
    this.checkoutAddress.messageTextArea.type("Este es un mensaje de prueba");
  }

  // Method to click the "Place Order" button
  clickOnPlaceOrder() {
    this.checkoutAddress.placeOrderBtn.click();
  }
}
