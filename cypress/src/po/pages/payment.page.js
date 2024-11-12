const BasePage = require("./base.page");
class PaymentPage extends BasePage {
  constructor() {
    super("/payment");
  }

  fillData() {
    this.payment.nameOnCardInput.type("Juan");
    this.payment.cardNumberInput.type("123");
    this.payment.cvcInput.type("456");
    this.payment.expirationMonthInput.type("01");
    this.payment.expirationYearInput.type("2030");
  }

  clickOnPayAndConfirmOrderBtn() {
    this.payment.payAndConfirmOrderBtn.click();
  }
}
module.exports = PaymentPage;
