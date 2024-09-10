class LoginPage {
  // Locators for LoginPage elements
  getUsernameField() {
    return cy.get('#j_username');  // Updated selector
  }

  getPasswordField() {
    return cy.get('#j_password');  // Updated selector
  }

  getSubmitButton() {
    return cy.get("input[value='Submit']").should("exist"); // Ensure it's there even if hidden
  }

  getForgotPasswordLink() {
    return cy.get(
      'a[href*="/cag/forgot_password?_passwordType=policyholders"]'
    );
  }

  // Actions for LoginPage
  enterUsername(username) {
    this.getUsernameField().type(username);
  }

  enterPassword(password) {
    this.getPasswordField().type(password);
  }

  clickSubmit() {
    // This will ensure we only target visible submit buttons
    this.getSubmitButton().filter(":visible").click({ force: true });
  }

  clickForgotPassword() {
    this.getForgotPasswordLink().click();
  }

  verifyLoginFailure() {
    // Assert that the login failed based on an incorrect username or password
    cy.contains("font", "Username or password is incorrect.").should("exist");
  }

  verifyEmptyUsernameError() {
    // Verify the error message for an empty username
    cy.contains("font", "Username required").should("exist");
  }

  verifyEmptyUsernameErrorWithPassword() {
    cy.contains('Username required. Your username may be your first initial and last name, with no spaces. In some cases, additional numbers may follow your last name.').should('exist'); // Ensure this error message exists
  }

  verifyEmptyPasswordError() {
    // Verify the error message for an empty password
    cy.contains("font", "Password required").should("exist"); // Updated based on the screenshot
  }

  verifyEmptyUsernameAndPasswordErrors() {
    // Verify both the username and password required error messages
    cy.contains("font", "Enter username and password to log in.").should("exist");
    
  }
}

export default LoginPage;
