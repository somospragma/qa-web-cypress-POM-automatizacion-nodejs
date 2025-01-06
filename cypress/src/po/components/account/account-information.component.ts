import { Gender } from "@/utils/models/account.model";

export class AccountComponent {
  inputGender(gender: Gender) {
    const selectors: { [key: string]: string } = {
      Mr: "[id='id_gender1']",
      Mrs: "[id='id_gender2']",
    };
    return cy.get(selectors[gender]);
  }

  get password() {
    return cy.get("[id='password']");
  }

  get day() {
    return cy.get("select[id='days']").select("18").should("have.value", "18");
  }

  get month() {
    return cy
      .get("select[id='months']")
      .select("April")
      .should("have.value", "4");
  }

  get year() {
    return cy
      .get("select[id='years']")
      .select("1999")
      .should("have.value", "1999");
  }

  get firstName() {
    return cy.get("[id='first_name']");
  }

  get lastName() {
    return cy.get("[id='last_name']");
  }

  get company() {
    return cy.get("[id='company']");
  }

  get addressOne() {
    return cy.get("[id='address1']");
  }

  get addressTwo() {
    return cy.get("[id='address2']");
  }

  get country() {
    return cy
      .get("select[id='country']")
      .select("Canada")
      .should("have.value", "Canada");
  }

  get state() {
    return cy.get("[id='state']");
  }

  get city() {
    return cy.get("[id='city']");
  }

  get zipCode() {
    return cy.get("[id='zipcode']");
  }

  get mobileNumber() {
    return cy.get("[id='mobile_number']");
  }

  get createAccountBtn() {
    return cy.get("[data-qa='create-account']");
  }
}
