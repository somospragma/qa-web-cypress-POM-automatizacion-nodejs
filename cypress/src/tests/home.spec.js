import CartPage from "../po/pages/cart.page";
import HomePage from "../po/pages/home.page";
import LoginPage from "../po/pages/login.page";
import SingupPage from "../po/pages/singup.page";

describe("Automation Exercise - Home Page Tests", () => {
  // Instances
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const loginPage = new LoginPage();
  const singupPage = new SingupPage();

  it("should navigate to the homepage and add to cart a product", () => {
    // Navigate to home page
    homePage.open();

    // Click to 'Add to cart'
    homePage.addToCartClick();

    // Click 'Cart' button
    homePage.clickToCartBtn();

    // Verify that cart page is displayed
    cartPage.verifyCartPageisVisible();

    //  Click Proceed To Checkout
    cartPage.clickToProceedCheckoutBtn();

    // Click 'Register / Login' button
    cartPage.clickToRegisterOrLoginBtn();

    // Fill all details in Signup and create account
    loginPage.verifyLoginPageisVisible();
    loginPage.enterName();
    loginPage.enterEmail();
    loginPage.clickOnSinUp();
    // singup page form details
    singupPage.selectGender("Mrs");
    // Verify 'ACCOUNT CREATED!' and click 'Continue' button

    // Verify ' Logged in as username' at top

    // Click 'Cart' button

    // Click 'Proceed To Checkout' button

    // Verify Address Details and Review Your Order

    // Enter description in comment text area and click 'Place Order'

    // Enter payment details: Name on Card, Card Number, CVC, Expiration date

    // Click 'Pay and Confirm Order' button

    // Verify success message 'Your order has been placed successfully!'

    // Click 'Delete Account' button

    // Verify 'ACCOUNT DELETED!' and click 'Continue' button
  });
});
