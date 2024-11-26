export class AccountComponent {
  // Define the type of `gender` as "Mr" | "Mrs" to prevent typographical errors.
  inputGender(gender: "Mr" | "Mrs") {
    const selectors: { [key: string]: string } = {
      Mr: "[id='id_gender1']",
      Mrs: "[id='id_gender2']",
    };
    return cy.get(selectors[gender]);
  }

  // Property for the password field
  get password() {
    return cy.get("[id='password']");
  }

  // Selection of the day of birth
  get day() {
    return cy.get("select[id='days']").select("18").should("have.value", "18");
  }

  // Selection of the month of birth
  get month() {
    return cy
      .get("select[id='months']")
      .select("April")
      .should("have.value", "4");
  }

  // Selection of the year of birth
  get year() {
    return cy
      .get("select[id='years']")
      .select("1999")
      .should("have.value", "1999");
  }

  // Properties for other fields

  get firstName() {
    return cy.get("[id='first_name']");
  }

  get lastName() {
    return cy.get("[id='last_name']");
  }

  get company() {
    return cy.get("[id='company']");
  }

  get address() {
    return cy.get("[id='address1']");
  }

  get address2() {
    return cy.get("[id='address2']");
  }

  get country() {
    return cy
      .get("select[id='country']")
      .select("Israel")
      .should("have.value", "Israel");
  }

  get state() {
    return cy.get("[id='state']");
  }

  get city() {
    return cy.get("[id='city']");
  }

  get zipcode() {
    return cy.get("[id='zipcode']");
  }

  get mobileNumber() {
    return cy.get("[id='mobile_number']");
  }

  get createAccountBtn() {
    return cy.get("[data-qa='create-account']");
  }
}
