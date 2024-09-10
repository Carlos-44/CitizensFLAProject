import HomePage from '../page_objects/HomePage';

describe('Footer Links', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        cy.visit('/'); 
        cy.scrollTo('bottom'); // Scroll to the bottom of the page
    });

    it('should have a Terms & Conditions link and click it', () => {
        homePage.clickTermsAndConditions();
    });

    it('should have a Privacy Policy link and click it', () => {
        homePage.clickPrivacyPolicy();
    });

    it('should have a Site Map link and click it', () => {
        homePage.clickSiteMap();
    });

    it('should have an Accessibility link and click it', () => {
        homePage.clickAccessibility();
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test
    return false;
});
