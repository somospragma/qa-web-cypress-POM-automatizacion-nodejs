import { AccountDeletedMessages } from "@/utils/models/account.model";
import { DeleteAccountComponent } from "../components/account/delete-account.component";
import BasePage from "./base.page";

export class DeleteAccountPage extends BasePage {
  deleteAccount: DeleteAccountComponent = new DeleteAccountComponent();

  constructor() {
    super("/delete_account");
  }

  validateDeletedMessages(messages: AccountDeletedMessages) {
    const {
      accountDeletedTitle,
      accountDeletedFirstParagraph,
      accountDeletedSecondParagraph,
    } = messages;
    this.deleteAccount.accountDeletedTitle.contains(accountDeletedTitle);
    this.deleteAccount.accountDeletedFirstParagraph.contains(
      accountDeletedFirstParagraph
    );
    this.deleteAccount.accountDeletedSecondParagraph.contains(
      accountDeletedSecondParagraph
    );
  }

  clickOnContinueBtn() {
    this.deleteAccount.continueBtn.click();
  }
}
