import HomePage from "../../cypress/po/pages/home.page";

describe("Automation Exercise - Home Page Tests", () => {
  const homePage = new HomePage();

  it("should navigate to the homepage and click on Signup / Login button", () => {
    // Navegar a la página de inicio
    homePage.navigateToHome();

    // Hacer clic en el botón 'Signup / Login'
    homePage.clickSignUpLogin();

    // Verificar que la URL incluye '/login'
    cy.url().should("include", "/login");
  });
});
