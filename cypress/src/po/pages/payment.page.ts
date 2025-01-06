import { CreditCardData } from "@/utils/models/credit-card.model";
import { PaymentComponent } from "../components/payment/payment.component";
import BasePage from "./base.page";

export class PaymentPage extends BasePage {
  payment: PaymentComponent = new PaymentComponent();
  constructor() {
    super("/payment"); 
  }

  fillData(name: string, creditCardData: CreditCardData) {
    const { cardNumber, cvc, expirationMonth, expirationYear } = creditCardData;
    cy.log(`Fill payment data`);
    this.payment.nameOnCardInput.type(name); 
    this.payment.cardNumberInput.type(cardNumber); 
    this.payment.cvcInput.type(cvc); 
    this.payment.expirationMonthInput.type(expirationMonth); 
    this.payment.expirationYearInput.type(expirationYear); 
  }


  clickOnPayAndConfirmOrderBtn() {
    cy.log(`Click the 'Pay and Confirm Order' button`);
    this.payment.payAndConfirmOrderBtn.click(); 
  }
}
