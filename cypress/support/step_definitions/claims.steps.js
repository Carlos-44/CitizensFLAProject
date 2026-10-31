import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../page_objects/HomePage';

const homePage = new HomePage();

Given('I am on the Citizens Property Insurance homepage', () => {
  cy.visit('/');
});

When('I click the {string} link in the claims section', (linkText) => {
  switch (linkText) {
    case 'Contact Citizens First':
      homePage.getContactCitizensFirstLink().click({ force: true });
      break;
    default:
      throw new Error(`Unknown claims link: ${linkText}`);
  }
});

When('I click the {string} link', (linkText) => {
  switch (linkText) {
    case 'Report a Claim':
      homePage.getReportAClaimLink().eq(1).click({ force: true });
      break;
    case 'Sinkhole Claims':
      homePage.getSinkholeClaimsLink().eq(1).click({ force: true });
      break;
    case 'Loss Inspection':
      homePage.getLossInspectionLink().eq(1).click({ force: true });
      break;
    case 'Insurance Fraud':
      homePage.getInsuranceFraudLink().eq(1).click({ force: true });
      break;
    default:
      throw new Error(`Unknown link: ${linkText}`);
  }
});

Then('the URL should contain {string}', (urlPart) => {
  homePage.verifyUrlContains(urlPart);
});
