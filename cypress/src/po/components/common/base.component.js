class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }

  get rootEl() {
    return cy.get(this.rootSelector); // Usar Cypress en lugar de WebDriver
  }

  item(parentElement, options, option) {
    return parentElement.get(options[option.toLowerCase()]); // Usar get de Cypress
  }
}

module.exports = BaseComponent;
