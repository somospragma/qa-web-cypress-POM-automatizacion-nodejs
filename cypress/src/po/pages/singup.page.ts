import BasePage from "./base.page";

export class SingupPage extends BasePage {
  constructor() {
    super("/signup"); // Initialize the path for the signup page
  }

  // Method to select gender
  selectGender(gender: "Mr" | "Mrs") {
    cy.log(`Click to select gender: ${gender}`);

    // Use the inputGender method from AccountComponent to select gender
    this.account.inputGender(gender).click();
  }

  // Method to enter password
  enterPassword() {
    cy.log(`Enter the password into the placeholder`);
    this.account.password.type("321"); // Enter the password
  }

  // Method to select day from the dropdown
  selectDay() {
    cy.log(`Click to select the day 18`);
    this.account.day.select("18"); // Select day (you might want to adjust based on your implementation)
  }

  // Method to select month from the dropdown
  selectMonth() {
    cy.log(`Click to select the month`);
    this.account.month.select("December"); // Select month (adjust depending on dropdown values)
  }

  // Method to select year from the dropdown
  selectYear() {
    cy.log(`Click to select the year`);
    this.account.year.select("1995"); // Select year (adjust based on your implementation)
  }

  // Method to enter the first name
  enterFirstName() {
    cy.log(`Enter the first name`);
    this.account.firstName.type("Juan"); // Type the first name
  }

  // Method to enter the last name
  enterLastName() {
    cy.log(`Enter the last name`);
    this.account.lastName.type("Aguirre"); // Type the last name
  }

  // Method to enter the company name
  enterCompany() {
    cy.log(`Enter the company name`);
    this.account.company.type("Pragma"); // Type the company name
  }

  // Method to enter the address
  enterAddress() {
    cy.log(`Enter the address`);
    this.account.address.type("cra44#26"); // Type the address
  }

  // Method to enter a second address field
  enterAddress2() {
    cy.log(`Enter the second address`);
    this.account.address2.type("cll#24"); // Type the second address
  }

  // Method to select country
  enterCountry() {
    cy.log(`Enter the country`);
    this.account.country.select("Israel"); // Select country (adjust depending on the dropdown values)
  }

  // Method to enter the state
  enterState() {
    cy.log(`Enter the state`);
    this.account.state.type("Antioquia"); // Type the state
  }

  // Method to enter the city
  enterCity() {
    cy.log(`Enter the city`);
    this.account.city.type("Sabaneta"); // Type the city
  }

  // Method to enter the zipcode
  enterZipcode() {
    cy.log(`Enter the zipcode`);
    this.account.zipcode.type("321"); // Type the zipcode
  }

  // Method to enter the mobile number
  enterMobileNumber() {
    cy.log(`Enter the mobile number`);
    this.account.mobileNumber.type("321"); // Type the mobile number
  }

  // Method to click the create account button
  clickOnCreateAccount() {
    cy.log(`Click to create the account`);
    this.account.createAccountBtn.click(); // Click the create account button
  }
}
