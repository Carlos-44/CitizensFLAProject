import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../page_objects/HomePage';

const homePage = new HomePage();

When('I click the {string} navigation button', (buttonText) => {
  switch (buttonText) {
    case 'Insurance':
      homePage.clickInsuranceButton();
      break;
    case 'Claims':
      homePage.clickClaimsButton();
      break;
    case 'Storms':
      homePage.clickStormsButton();
      break;
    case 'Learning':
      homePage.clickLearningButton();
      break;
    case 'News':
      homePage.clickNewsButton();
      break;
    case 'About Us':
      homePage.clickAboutUsButton();
      break;
    default:
      throw new Error(`Unknown navigation button: ${buttonText}`);
  }
});

Then('the Insurance modal should be visible and contain {string}', (text) => {
  homePage.verifyInsuranceModal();
});

Then('the Claims modal should be visible and contain {string}', (text) => {
  homePage.verifyClaimsModal();
});

Then('the Storms modal should be visible and contain {string}', (text) => {
  homePage.verifyStormsModal();
});

Then('the Learning modal should be visible and contain {string}', (text) => {
  homePage.verifyLearningModal();
});

Then('the News modal should be visible and contain {string}', (text) => {
  homePage.verifyNewsModal();
});

Then('the About Us modal should be visible and contain {string}', (text) => {
  homePage.verifyAboutUsModal();
});
