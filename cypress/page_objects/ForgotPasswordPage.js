class ForgotPasswordPage {
    // Locators for ForgotPasswordPage elements
    getUsernameField() {
        return cy.get('[name="username"]');  // Update the selector based on the actual page structure
    }

    getEmailField() {
        return cy.get('[name="email"]');  // Update the selector based on the actual page structure
    }

    getSubmitButton() {
        return cy.get('input[value="Submit"]');
    }

    getSectionHeader() {
        return cy.get('.sectionHeader');
    }

    // Actions for ForgotPasswordPage
    enterUsername(username) {
        this.getUsernameField().type(username);
    }

    enterEmail(email) {
        this.getEmailField().type(email);
    }

    clickSubmit() {
        this.getSubmitButton().click();
    }

    verifyPageHeader() {
        this.getSectionHeader().should('contain', 'Forgot Username/Password');
    }
}

export default ForgotPasswordPage;
