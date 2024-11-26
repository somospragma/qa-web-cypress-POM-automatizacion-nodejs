import { CartPage } from "@/pages/cart.page";
import { CheckoutPage } from "@/pages/checkout.page";
import { HomePage } from "@/pages/home.page";
import { LoginPage } from "@/pages/login.page";
import { SingupPage } from "@/pages/singup.page";
import { AccountCreatedPage } from "@/pages/account-created";
import { PaymentPage } from "@/pages/payment.page";
import { PaymentDonePage } from "@/pages/payment-done.page";
import { DeleteAccountPage } from "@/pages/delete-account.page";

describe("Automation Exercise - Home Page Tests", () => {
  // Instances
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const loginPage = new LoginPage();
  const singupPage = new SingupPage();
  const accountPage = new AccountCreatedPage();
  const checkoutPage = new CheckoutPage();
  const paymentPage = new PaymentPage();
  const paymentDonePage = new PaymentDonePage();
  const deleteAccountPage = new DeleteAccountPage();

  it("should navigate to the homepage and add to cart a product", () => {
    // Navigate to home page
    homePage.open();

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
    loginPage.verifyLoginPageisVisible();
    loginPage.enterName();
    loginPage.enterEmail();
    loginPage.clickOnSinUp();

    // Singup page form details
    singupPage.selectGender("Mrs"); // "Mr" | "Mrs"
    singupPage.enterPassword();
    singupPage.selectDay();
    singupPage.selectMonth();
    singupPage.selectYear();

    // Address information
    singupPage.enterFirstName();
    singupPage.enterLastName();
    singupPage.enterCompany();
    singupPage.enterAddress();
    singupPage.enterAddress2();
    singupPage.enterCountry();
    singupPage.enterState();
    singupPage.enterCity();
    singupPage.enterZipcode();
    singupPage.enterMobileNumber();
    singupPage.clickOnCreateAccount();

    // Verify 'ACCOUNT CREATED!' and click 'Continue' button
    accountPage.validateMessage();
    accountPage.clickOnContinueBtn();

    // Verify 'Logged in as username' at top
    homePage.verifyLoggedAsUsername();

    // Click 'Cart' button
    homePage.clickToCartAtHeader();

    // Click 'Proceed To Checkout' button
    cartPage.clickToProceedCheckoutBtn();

    // Verify Address Details and Review Your Order
    checkoutPage.verifyDeliveryDetails();
    checkoutPage.verifyBillingDetails();
    checkoutPage.reviewOrder();

    // Enter description in comment text area and click 'Place Order'
    checkoutPage.enterDescription();
    checkoutPage.clickOnPlaceOrder();

    // Enter payment details: Name on Card, Card Number, CVC, Expiration date
    paymentPage.fillData();

    // Click 'Pay and Confirm Order' button
    paymentPage.clickOnPayAndConfirmOrderBtn();

    // Verify success message 'Your order has been placed successfully!'
    paymentDonePage.validateSuccessMessage();

    // Click 'Delete Account' button
    paymentDonePage.clickOnDeleteAccount();

    // Verify 'ACCOUNT DELETED!' and click 'Continue' button
    deleteAccountPage.validateDeletedMessage();
    deleteAccountPage.clickOnContinueBtn();
  });
});
