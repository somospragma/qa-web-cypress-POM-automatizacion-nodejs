import BasePage from "./base.page";

export class DeleteAccountPage extends BasePage {
  constructor() {
    super("/delete_account"); // Set the path for the Delete Account page
  }

  // Method to validate the deleted account message
  validateDeletedMessage() {
    this.deleteAccount.accountDeletedTitle.contains("Account Deleted!");
    this.deleteAccount.accountDeletedFirstParagraph.contains(
      "Your account has been permanently deleted!"
    );
    this.deleteAccount.accountDeletedSecondParagraph.contains(
      "You can create new account to take advantage of member privileges to enhance your online shopping experience with us."
    );
  }

  // Method to click on the "Continue" button after account deletion
  clickOnContinueBtn() {
    this.deleteAccount.continueBtn.click();
  }
}
