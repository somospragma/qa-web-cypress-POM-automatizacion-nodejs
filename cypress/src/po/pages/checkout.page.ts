import { AccountData } from "@/utils/models/account.model";
import { CheckoutData } from "@/utils/models/checkout.model";
import { CheckoutComponent } from "../components/checkout/checkout.component";
import BasePage from "./base.page";

export class CheckoutPage extends BasePage {
  checkoutAddress: CheckoutComponent = new CheckoutComponent();

  constructor() {
    super("/checkout"); 
  }

  verifyDeliveryDetails(account: AccountData) {
    const { name, lastName, state, city, zipCode } = account;
    this.checkoutAddress.deliveryCard.fullName.contains(`${name} ${lastName}`);
    this.checkoutAddress.deliveryCard.company.contains(account.company);
    this.checkoutAddress.deliveryCard.addressOne.contains(account.addressOne);
    this.checkoutAddress.deliveryCard.addressTwo.contains(account.addressTwo);
    this.checkoutAddress.deliveryCard.stateCityAndPostcode.contains(
      `${city} ${state} ${zipCode}`
    );
    this.checkoutAddress.deliveryCard.country.contains(account.country);
    this.checkoutAddress.deliveryCard.mobileNumber.contains(
      account.mobileNumber
    );
  }

  verifyBillingDetails(account: AccountData) {
    const { name, lastName, state, city, zipCode } = account;
    this.checkoutAddress.billingCard.fullName.contains(`${name} ${lastName}`);
    this.checkoutAddress.billingCard.company.contains(account.company);
    this.checkoutAddress.billingCard.addressOne.contains(account.addressOne);
    this.checkoutAddress.billingCard.addressTwo.contains(account.addressTwo);
    this.checkoutAddress.billingCard.stateCityAndPostcode.contains(
      `${city} ${state} ${zipCode}`
    );
    this.checkoutAddress.billingCard.country.contains(account.country);
    this.checkoutAddress.billingCard.mobileNumber.contains(
      account.mobileNumber
    );
  }

  reviewOrder(reviewOrder: CheckoutData) {
    const {
      totalAmount,
      product: { image, description, price, quantity },
    } = reviewOrder;

    this.checkoutAddress.orderSummary.item.should("have.attr", "src", image);
    this.checkoutAddress.orderSummary.description.contains(description);
    this.checkoutAddress.orderSummary.price.contains(price);
    this.checkoutAddress.orderSummary.quantity.contains(quantity);
    this.checkoutAddress.orderSummary.totalPrice.contains(price);
    this.checkoutAddress.orderSummary.totalAmount.contains(totalAmount);
  }

  enterDescription(messageTextArea: string) {
    this.checkoutAddress.messageTextArea.type(messageTextArea);
  }

  clickOnPlaceOrder() {
    this.checkoutAddress.placeOrderBtn.click();
  }
}
