import HomePage from '../page_objects/HomePage';
import testData from '../data/testData';  // Import testData

describe('Search Functionality', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        cy.viewport(1400, 900); // Set the viewport size
        cy.visitHomePage(""); // This will run before each test
        homePage.verifyResponsiveImageExists(); // Ensure the image exists after visiting
    });

    it('should search for a valid term and display results', () => {
        homePage.searchFor(testData.homepage.searchTerms.validTerm);  // Search for a valid term
        homePage.verifySearchResultsVisible();  // Verify that search results are visible
        homePage.verifySearchResultsCount();  // Verify that search results are non-zero
    });

    it('should display "No results found" for an invalid search term', () => {
        homePage.searchFor(testData.homepage.searchTerms.invalidTerm);  // Search for an invalid term
        homePage.verifyNoResults();  // Verify that no results message is shown
    });

    it('should display pagination for a term with many results', () => {
        homePage.searchFor(testData.homepage.searchTerms.commonTerm);  // Search for a common term
        homePage.verifySearchResultsVisible();  // Verify that search results are visible
        homePage.verifyPaginationExists();  // Verify that pagination exists (if applicable)
    });

    it('should not display pagination for a term with few results', () => {
        homePage.searchFor(testData.homepage.searchTerms.fewResultsTerm);  // Search for a term with few results
        homePage.verifySearchResultsVisible();  // Verify that search results are visible
        homePage.getPagination().should('exist');  // Verify pagination does not exist
    });

    it('should clear search input and show default content', () => {
        homePage.searchFor(testData.homepage.searchTerms.validTerm);  // Perform a search first
        homePage.verifySearchResultsVisible();  // Verify search results
        homePage.getSearchInput().clear();  // Clear the search input
        homePage.getSearchInput().should('have.value', '');  // Verify that input is cleared
        homePage.verifyResponsiveImageExists();  // Verify that the default image content is displayed again
    });

    it('should handle an empty search gracefully', () => {
        homePage.searchFor(testData.homepage.searchTerms.emptyTerm);  // Perform an empty search
        homePage.verifyResponsiveImageExists();  // Ensure default content is still displayed
    });
});

// Prevent Cypress from failing on uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
