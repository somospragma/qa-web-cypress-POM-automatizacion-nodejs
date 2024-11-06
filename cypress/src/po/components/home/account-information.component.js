class AccountComponent {
  // select gender
  inputGender(gender) {
    const selectors = {
      Mr: "[id='id_gender1']",
      Mrs: "[id='id_gender2']",
    };
    return cy.get(selectors[gender]);
  }
}

module.exports = AccountComponent;
