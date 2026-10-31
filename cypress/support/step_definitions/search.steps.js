import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../page_objects/HomePage';

const homePage = new HomePage();

Given('I am on the Citizens Property Insurance homepage with a 1400x900 viewport', () => {
  cy.viewport(1400, 900);
  cy.visitHomePage('');
});

Given('the homepage responsive image is visible', () => {
  homePage.verifyResponsiveImageExists();
});

When('I search for {string}', (searchTerm) => {
  homePage.searchFor(searchTerm);
});

When('I clear the search input', () => {
  homePage.getSearchInput().clear();
});

Then('the search results page should be visible', () => {
  homePage.verifySearchResultsVisible();
});

Then('the no results message should be displayed', () => {
  homePage.verifyNoResults();
});

Then('the pagination should be present', () => {
  homePage.verifyPaginationExists();
});

Then('the search input should be empty', () => {
  homePage.getSearchInput().should('have.value', '');
});

Then('the homepage responsive image should be visible', () => {
  homePage.verifyResponsiveImageExists();
});
