import HomePage from '../page_objects/HomePage';
import LoginPage from '../page_objects/LoginPage';
import testData from '../data/testData';

describe('Login Page - Negative', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevent Cypress from failing the test due to uncaught exceptions
    });

    beforeEach(() => {
        cy.clearCookies(); // Clear cookies before visiting the page
        cy.visit('/');     // Visit the homepage
    
        // Wait for the login link to be visible and clickable
        homePage.loginLink().should('be.visible', { timeout: 20000 }).click();
    
        // Ensure the username and password fields are present
        loginPage.getUsernameField().should('be.visible', { timeout: 20000 });
        loginPage.getPasswordField().should('be.visible', { timeout: 20000 });
    });
    

    afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('should not allow login with invalid credentials', { retries: { runMode: 2, openMode: 1 } }, () => {
        loginPage.getUsernameField().should('be.visible', { timeout: 20000 }).type(testData.invalidUser.username);
        loginPage.getPasswordField().should('be.visible', { timeout: 20000 }).type(testData.invalidUser.password);
        loginPage.clickSubmit();

        // Assert for failure message displayed after an invalid login attempt
        loginPage.verifyLoginFailure(); // Check for the "Username or password is incorrect." message
    });

    it('should not allow login with empty username', { retries: { runMode: 2, openMode: 1 } }, () => {
        loginPage.getPasswordField().should('be.visible', { timeout: 20000 }).type(testData.validUser.password);
        loginPage.clickSubmit();

        // Assert for error message about missing username
        loginPage.verifyEmptyUsernameErrorWithPassword();
    });

    it('should not allow login with empty password', { retries: { runMode: 2, openMode: 1 } }, () => {
        loginPage.getUsernameField().should('be.visible', { timeout: 20000 }).type(testData.validUser.username);
        loginPage.clickSubmit();

        // Assert for error message about missing password
        loginPage.verifyEmptyPasswordError();
    });

    it('should not allow login with empty username and password', () => {
        loginPage.clickSubmit();  // Attempt to submit without entering credentials

        // Assert for both username and password empty error
        loginPage.verifyEmptyUsernameAndPasswordErrors();
    });
});
