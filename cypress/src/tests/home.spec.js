import HomePage from "../po/pages/home.page";

describe("Automation Exercise - Home Page Tests", () => {
  // Instances
  const homePage = new HomePage();

  it("should navigate to the homepage and add to cart a product", () => {
    // Navigate to home page
    homePage.open();

    // Click to 'Add to cart'
    homePage.addToCartClick();
  });
});
