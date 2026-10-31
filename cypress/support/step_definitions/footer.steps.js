import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../page_objects/HomePage';

const homePage = new HomePage();

Given('I scroll to the bottom of the page', () => {
  cy.scrollTo('bottom');
});

When('I click the {string} footer link', (linkText) => {
  switch (linkText) {
    case 'Terms & Conditions':
      homePage.clickTermsAndConditions();
      break;
    case 'Privacy Policy':
      homePage.clickPrivacyPolicy();
      break;
    case 'Site Map':
      homePage.clickSiteMap();
      break;
    case 'Accessibility':
      homePage.clickAccessibility();
      break;
    default:
      throw new Error(`Unknown footer link: ${linkText}`);
  }
});

Then('the Terms and Conditions page should open', () => {
  cy.url().should('not.be.empty');
});

Then('the Privacy Policy page should open', () => {
  cy.url().should('not.be.empty');
});

Then('the Site Map page should open', () => {
  cy.url().should('not.be.empty');
});

Then('the Accessibility page should open', () => {
  cy.url().should('not.be.empty');
});
