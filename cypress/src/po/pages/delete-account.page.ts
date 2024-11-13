import BasePage from  "./base.page";

export class DeleteAccountPage extends BasePage {
  constructor() {
    super("/delete_account");
  }

  validateDeletedMessage() {
    this.deleteAccount.accountDeletedTitle.contains("Account Deleted!");
    this.deleteAccount.accountDeletedFirstparagraph.contains(
      "Your account has been permanently deleted!"
    );
    this.deleteAccount.accountDeletedSecondparagraph.contains(
      "You can create new account to take advantage of member privileges to enhance your online shopping experience with us."
    );
  }

  clickOnContinueBtn() {
    this.deleteAccount.continueBtn.click();
  }
}

//module.exportss = DeleteAccountPage;
