export class HomeComponent {

  get firstProduct() {
    return cy.get(
      "div.features_items div.col-sm-4:nth-child(3)    a.btn.btn-default.add-to-cart:nth-child(4)"
    );
  }
}
