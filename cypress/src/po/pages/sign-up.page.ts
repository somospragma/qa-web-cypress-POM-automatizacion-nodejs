import { AccountData, Birthday, Gender } from "@/utils/models/account.model";
import { AccountComponent } from "../components/account/account-information.component";
import BasePage from "./base.page";

export class SignUpPage extends BasePage {
  account = new AccountComponent();
  constructor() {
    super("/signup"); 
  }

  selectGender(gender: Gender) {
    cy.log(`Click to select gender: ${gender}`);
    this.account.inputGender(gender).click();
  }

  enterPassword(password: string) {
    cy.log(`Enter the password into the placeholder`);
    this.account.password.type(password); 
  }

  selectDay(day: string) {
    cy.log(`Click to select the day ${day}`);
    this.account.day.select(day); 
  }

  selectMonth(month: string) {
    cy.log(`Click to select the ${month}`);
    this.account.month.select(month);
  }

  selectYear(year: string) {
    cy.log(`Click to select the ${year}`);
    this.account.year.select(year); 
  }

  selectBirthday(birthday: Birthday) {
    this.selectDay(birthday.day);
    this.selectMonth(birthday.month);
    this.selectYear(birthday.year);
  }

  enterFirstName(name: string) {
    cy.log(`Enter the first name`);
    this.account.firstName.type(name); 
  }

  enterLastName(lastName: string) {
    cy.log(`Enter the last name`);
    this.account.lastName.type(lastName); 
  }

  enterCompany(company: string) {
    cy.log(`Enter the company name`);
    this.account.company.type(company); 
  }

  enterAddressOne(addressOne: string) {
    cy.log(`Enter the address`);
    this.account.addressOne.type(addressOne); 
  }

  enterAddressTwo(addressTwo: string) {
    cy.log(`Enter the second address`);
    this.account.addressTwo.type(addressTwo); 
  }

  enterCountry(country: string) {
    cy.log(`Enter the country`);
    this.account.country.select(country); 
  }

  enterState(state: string) {
    cy.log(`Enter the state`);
    this.account.state.type(state); 
  }

  enterCity(city: string) {
    cy.log(`Enter the city`);
    this.account.city.type(city); 
  }

  enterZipcode(zipCode: string) {
    cy.log(`Enter the zipcode`);
    this.account.zipCode.type(zipCode); 
  }

  enterMobileNumber(mobileNumber: string) {
    cy.log(`Enter the mobile number`);
    this.account.mobileNumber.type(mobileNumber); 
  }

  clickOnCreateAccount() {
    cy.log(`Click to create the account`);
    this.account.createAccountBtn.click(); 
  }

  createAccount(account: AccountData) {
    this.selectGender(Gender.Mr); // "Mr" | "Mrs"
    this.enterPassword(account.password);
    this.selectBirthday(account.birthday);
    this.enterFirstName(account.name);
    this.enterLastName(account.lastName);
    this.enterCompany(account.company);
    this.enterAddressOne(account.addressOne);
    this.enterAddressTwo(account.addressTwo);
    this.enterCountry(account.country);
    this.enterState(account.state);
    this.enterCity(account.city);
    this.enterZipcode(account.zipCode);
    this.enterMobileNumber(account.mobileNumber);
    this.clickOnCreateAccount();
  }
}
