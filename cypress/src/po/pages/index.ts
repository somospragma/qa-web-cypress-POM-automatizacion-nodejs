import { CartPage } from "./cart.page";
import { CheckoutPage } from "./checkout.page";
import { HomePage } from "./home.page";
import { LoginPage } from "./login.page";
import { SignUpPage } from "./sign-up.page";
import { AccountCreatedPage } from "./account-created";
import { PaymentPage } from "./payment.page";
import { PaymentDonePage } from "./payment-done.page";
import { DeleteAccountPage } from "./delete-account.page";

const PAGE_MAP = {
  home: HomePage,
  cart: CartPage,
  login: LoginPage,
  signUp: SignUpPage,
  account: AccountCreatedPage,
  checkout: CheckoutPage,
  payment: PaymentPage,
  paymentDone: PaymentDonePage,
  deleteAccount: DeleteAccountPage,
};

type PageKeys = keyof typeof PAGE_MAP;

export function pages<K extends PageKeys>(page: K) {
  const PageClass = PAGE_MAP[page]; 
  return new PageClass() as InstanceType<(typeof PAGE_MAP)[K]>;

}
