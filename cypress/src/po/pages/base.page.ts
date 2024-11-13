// Importar los componentes usando import en lugar de require
import NotificationComponent from "@/po/components/home/add-to-cart-notification.component";
import {HomeComponent} from "@/po/components/home/home.component";
import {HeaderComponent} from "@/components/common/header.component";
import {CartComponent} from "@/po/components/home/cart.component";
import {CheckoutNotificationComponent} from "@/po/components/home/checkout-notification.component";
import {CheckoutComponent} from "@/po/components/home/checkout.component";
import {LoginComponent} from "@/components/home/login.component";
import {AccountComponent} from "@/components/home/account-information.component";
import {PaymentComponent} from "@/po/components/home/payment.component";
import {PaymentDoneComponent} from "@/po/components/home/payment-done.component";
import {DeleteAccountComponent} from "@/po/components/home/delete-account.component";

// Definir la clase BasePage
class BasePage {
  private path: string; // Tipo de 'path'
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

  // El constructor acepta un parámetro de tipo string para la ruta
  constructor(path: string = "") {
    this.path = path;
    // Inicializar los componentes
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

  // Método para abrir la página en Cypress
  open() {
    cy.log(`Visit the page https://www.automationexercise.com${this.path}`);
    return cy.visit(this.path); // Visitar la URL base + la ruta
  }
}

// Exportar la clase BasePage
export default BasePage;