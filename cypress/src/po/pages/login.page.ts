import { LoginComponent } from "../components/login/login.component";
import BasePage from "./base.page";

export class LoginPage extends BasePage {
  login: LoginComponent = new LoginComponent();

  constructor() {
    super("/login"); 
  }

  verifyLoginPageIsVisible() {
    cy.log(`Verify that LoginPage is visible`);
    cy.url().should("include", "/login"); 
  }

  enterName(name: string) {
    cy.log(`Enter the name into placeholder`);
    this.login.inputName.type(name);
  }

  enterEmail(email: string) {
    cy.log(`Enter the email: ${email}`);
    this.login.inputEmail.type(email); 
  }

  clickOnSignUp() {
    cy.log(`Click to SignUp Button`);
    this.login.singUpBtn.click(); 
  }

  signUp(name: string, email: string) {
    this.enterName(name);
    this.enterEmail(email);
    this.clickOnSignUp();
  }
}
