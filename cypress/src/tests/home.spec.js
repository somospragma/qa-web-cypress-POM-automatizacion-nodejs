import HomePage from "../po/pages/home.page";

describe("Automation Exercise - Home Page Tests", () => {
  // Instances
  const homePage = new HomePage();

  it("should navigate to the homepage and add to cart a product", () => {
    // Navigate to home page
    homePage.open();

    // Click to 'Add to cart'
    homePage.addToCartClick();

    // Click 'Cart' button
    homePage.clickToCartBtn();

    // Verify that cart page is displayed

    //  Click Proceed To Checkout

    // Click 'Register / Login' button

    // Fill all details in Signup and create account

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
