import { HeaderComponent } from "@/components/common/header.component";

export default class BasePage {
  public header: HeaderComponent;

  constructor(private _path: string = "") {
    this.header = new HeaderComponent(); 
  }

  open() {
    cy.log(`Visiting page at https://www.automationexercise.com${this._path}`);
    return cy.visit(this._path); // Navigate to base URL + path
  }
}
