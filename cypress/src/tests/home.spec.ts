import { pages } from "@/po/pages";
// DATA from JSON file
import Account from "@/utils/data/account.data.json";
import Checkout from "@/utils/data/checkout.data.json";
import CreditCardData from "@/utils/data/credit-card.data.json";
import PaymentDone from "@/utils/data/payment-done.data.json";
import AccountDeleted from "@/utils/data/delete-account.data.json";

describe("Automation Exercise - Home Page Tests", () => {
  // Instances
  let homePage = pages("home");
  let cartPage = pages("cart");
  let loginPage = pages("login");
  let signUpPage = pages("signUp");
  let accountPage = pages("account");
  let checkoutPage = pages("checkout");
  let paymentPage = pages("payment");
  let paymentDonePage = pages("paymentDone");
  let deleteAccountPage = pages("deleteAccount");

  beforeEach(() => {
    // Navigate to home page
    homePage.open();
  });

  it("The user navigate on the website, create an account and bought a product and finally delete the account", () => {
    // Click to 'Add to cart'
    homePage.addToCartClick();

    // Click 'Cart' button
    homePage.clickToCartBtn();

    // Verify that cart page is displayed
    cartPage.verifyCartPageIsVisible();

    //  Click Proceed To Checkout
    cartPage.clickToProceedCheckoutBtn();

    // Click 'Register / Login' button
    cartPage.clickToRegisterOrLoginBtn();

    // Fill all details in Signup and create account
    loginPage.verifyLoginPageIsVisible();
    loginPage.signUp(Account.name, Account.email);

    // Sign Up page form details
    signUpPage.createAccount(Account);

    // Verify 'ACCOUNT CREATED!' and click 'Continue' button
    accountPage.validateMessages(Account.messages);
    accountPage.clickOnContinueBtn();

    // Verify 'Logged in as username' at top
    homePage.verifyLoggedAsUsername(Account.name);

    // Click 'Cart' button
    homePage.clickToCartAtHeader();

    // Click 'Proceed To Checkout' button
    cartPage.clickToProceedCheckoutBtn();

    // Verify Address Details and Review Your Order
    checkoutPage.verifyDeliveryDetails(Account);
    checkoutPage.verifyBillingDetails(Account);
    checkoutPage.reviewOrder(Checkout);

    // Enter description in comment text area and click 'Place Order'
    checkoutPage.enterDescription(Checkout.messageTextArea);
    checkoutPage.clickOnPlaceOrder();

    // Enter payment details: Name on Card, Card Number, CVC, Expiration date
    paymentPage.fillData(Account.name, CreditCardData);

    // Click 'Pay and Confirm Order' button
    paymentPage.clickOnPayAndConfirmOrderBtn();

    // Verify success message 'Your order has been placed successfully!'
    paymentDonePage.validateSuccessMessage(
      PaymentDone.orderPlacedMessage,
      PaymentDone.orderConfirmedMessage
    );

    // Click 'Delete Account' button
    paymentDonePage.clickOnDeleteAccount();

    // Verify 'ACCOUNT DELETED!' and click 'Continue' button
    deleteAccountPage.validateDeletedMessages(AccountDeleted.messages);
    deleteAccountPage.clickOnContinueBtn();
  });
});
