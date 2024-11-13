import BasePage from  "./base.page";

export class SingupPage extends BasePage {
  constructor() {
    super("/signup");
  }

  selectGender(gender) {
    cy.log(`Click to select gender: ${gender}`);
    this.account.inputGender(gender).click();
  }

  enterPassword() {
    cy.log(`Enter the password into placeholder`);
    this.account.password.type("321");
  }

  selectDay() {
    cy.log(`Click to select the day 18`);
    this.account.day;
  }

  selectMonth() {
    cy.log(`Click to select the moth`);
    this.account.month;
  }

  selectYear() {
    cy.log(`Click to select the year`);
    this.account.year;
  }

  enterFirstName() {
    cy.log(`Click to enter the year`);
    this.account.firstName.type("Juan");
  }

  enterLastName() {
    cy.log(`Click to enter the lastName`);
    this.account.lastName.type("Aguirre");
  }

  enterCompany() {
    cy.log(`Click to enter the company`);
    this.account.company.type("Pragma");
  }

  enterAddress() {
    cy.log(`Click to enter the address`);
    this.account.address.type("cra44#26");
  }

  enterAddress2() {
    cy.log(`Click to enter the address2`);
    this.account.address2.type("cll#24");
  }

  enterCountry() {
    cy.log(`Click to enter the country`);
    this.account.country;
  }

  enterState() {
    cy.log(`Click to enter the state`);
    this.account.state.type("Antioquia");
  }

  enterCity() {
    cy.log(`Click to enter the city`);
    this.account.city.type("Sabaneta");
  }

  enterZipcode() {
    cy.log(`Click to enter the zipcode`);
    this.account.zipcode.type("321");
  }

  enterMobileNumber() {
    cy.log(`Click to enter the mobileNumber`);
    this.account.mobileNumber.type("321");
  }
  clickOnCreateAccount() {
    cy.log(`Click to enter the createAccountBtn`);
    this.account.createAccountBtn.click();
  }
}
//module.exportss = SingupPage;
