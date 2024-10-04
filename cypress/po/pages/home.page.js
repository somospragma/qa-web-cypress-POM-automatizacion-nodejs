class HomePage {
  // Selectors
  get signUpLoginButton() {
    return cy.get('a[href="/login"]');
  }

  // Methods
  navigateToHome() {
    cy.visit("/");
  }

  clickSignUpLogin() {
    this.signUpLoginButton.click();
  }
}

export default HomePage;
