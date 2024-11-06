const BasePage = require("./base.page");

class SingupPage extends BasePage {
  constructor() {
    super("/signup");
  }

  selectGender(gender) {
    cy.log(`Click to select gender: ${gender}`);
    this.account.inputGender(gender).click();
  }
}
module.exports = SingupPage;
