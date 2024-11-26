// Import components using ES6 import syntax
import NotificationComponent from "@/po/components/home/add-to-cart-notification.component";
import { HomeComponent } from "@/po/components/home/home.component";
import { HeaderComponent } from "@/components/common/header.component";
import { CartComponent } from "@/po/components/home/cart.component";
import { CheckoutNotificationComponent } from "@/po/components/home/checkout-notification.component";
import { CheckoutComponent } from "@/po/components/home/checkout.component";
import { LoginComponent } from "@/components/home/login.component";
import { AccountComponent } from "@/components/home/account-information.component";
import { PaymentComponent } from "@/po/components/home/payment.component";
import { PaymentDoneComponent } from "@/po/components/home/payment-done.component";
import { DeleteAccountComponent } from "@/po/components/home/delete-account.component";

// Define the BasePage class
class BasePage {
  private path: string; // Path for the page route
  public home: HomeComponent;
  public header: HeaderComponent;
  public notification: NotificationComponent;
  public cart: CartComponent;
  public checkout: CheckoutNotificationComponent;
  public checkoutAddress: CheckoutComponent;
  public login: LoginComponent;
  public account: AccountComponent;
  public payment: PaymentComponent;
  public paymentDone: PaymentDoneComponent;
  public deleteAccount: DeleteAccountComponent;

  // Constructor accepts a path parameter of type string
  constructor(path: string = "") {
    this.path = path;
    // Initialize components
    this.home = new HomeComponent();
    this.header = new HeaderComponent();
    this.notification = new NotificationComponent();
    this.cart = new CartComponent();
    this.checkout = new CheckoutNotificationComponent();
    this.checkoutAddress = new CheckoutComponent();
    this.login = new LoginComponent();
    this.account = new AccountComponent();
    this.payment = new PaymentComponent();
    this.paymentDone = new PaymentDoneComponent();
    this.deleteAccount = new DeleteAccountComponent();
  }

  // Method to open the page in Cypress
  open() {
    cy.log(`Visiting page at https://www.automationexercise.com${this.path}`);
    return cy.visit(this.path); // Navigate to base URL + path
  }
}

// Export the BasePage class
export default BasePage;
