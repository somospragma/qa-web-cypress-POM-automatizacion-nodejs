const NotificationComponent = require("../components/home/add-to-cart-notification.component");
const HomeComponent = require("../components/home/home.component");

class BasePage {
  constructor(url) {
    this.url = url;
    this.home = new HomeComponent();
    //this.Notification = new NotificationComponent();
  }

  open() {
    return cy.visit(this.url);
  }
}

module.exports = BasePage;
