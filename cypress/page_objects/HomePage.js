import testData from "../data/testData";

class HomePage {
  visit() {
    cy.visit('/'); // This will take you to the homepage
  }

  
  termsAndConditionsLink() {
    return cy.contains("Terms & Conditions");
  }

  privacyPolicyLink() {
    return cy.contains("Privacy Policy");
  }

  siteMapLink() {
    return cy.contains("Site Map");
  }

  accessibilityLink() {
    return cy.get("a[href='https://www.citizensfla.com/accessibility']");
  }

  insuranceButton() {
    return cy.get("#siteNavModalBtn_menu_1");
  }

  claimsButton() {
    return cy.get("#siteNavModalBtn_menu_2");
  }

  stormsButton() {
    return cy.get("#siteNavModalBtn_menu_3");
  }

  learningButton() {
    return cy.get("#siteNavModalBtn_menu_4");
  }

  newsButton() {
    return cy.get("#siteNavModalBtn_menu_5");
  }

  aboutUsButton() {
    return cy.get("#siteNavModalBtn_menu_6");
  }

  loginLink() {
    return cy.get('#loginAction');
  }

  clickTermsAndConditions() {
    this.termsAndConditionsLink().should("be.visible").click();
  }

  clickPrivacyPolicy() {
    this.privacyPolicyLink().should("be.visible").click();
  }

  clickSiteMap() {
    this.siteMapLink().should("be.visible").click();
  }

  clickAccessibility() {
    this.accessibilityLink().click();
  }

  verifyInsuranceButton() {
    this.insuranceButton().should("be.visible").and("contain", "Insurance");
  }

  verifyClaimsButton() {
    this.claimsButton().should("be.visible").and("contain", "Claims");
  }

  verifyStormsButton() {
    this.stormsButton().should("be.visible").and("contain", "Storms");
  }

  verifyLearningButton() {
    this.learningButton().should("be.visible").and("contain", "Learning");
  }

  verifyNewsButton() {
    this.newsButton().should("be.visible").and("contain", "News");
  }

  verifyAboutUsButton() {
    this.aboutUsButton().should("be.visible").and("contain", "About Us");
  }

  clickLogin() {
    this.loginLink().then(($el) => {
      if ($el.is(":visible")) {
        cy.wrap($el).click();
      } else {
        cy.wait(1000); // Retry after a short delay
        this.loginLink().click(); // Retry clicking
      }
    });
  }
  getClaimsButton() {
    return cy.get("button[id='siteNavModalBtn_menu_2'] span"); 
  }

  getClaimsModal() {
    return cy.get(
      "div[id='siteNavModalContent_2'] a[class='mr-4 text-decoration-none'] span"
    ); 
  }

  getLink(linkPartialHref) {
    return cy.get("a[href*='${linkPartialHref}']"); 
   }

  getContactCitizensFirstLink() {
    return cy.get(
      "div[id='siteNavModalContent_2'] div[class='row justify-content-start'] div:nth-child(1) a:nth-child(1) span:nth-child(1)"
    ); 
  }

  getReportAClaimLink() {
    return cy.get("a[href*='report-a-claim']"); 
  }

  getCatastropheClaimsLink() {
    return cy.get("a[href*='catastrophe-claims']"); 
  }

  getSinkholeClaimsLink() {
    return cy.get("a[href*='sinkhole-claims']"); 
  }

  getLossInspectionLink() {
    return cy.get("a[href*='loss-inspection']"); 
  }

  getInsuranceFraudLink() {
    return cy.get("a[href*='insurance-fraud']");
  }

  getModalContent() {
    return cy.get(
      "div[id='siteNavModalContent_2'] div[class='row justify-content-start']"
    );
  }

  
  openClaimsSection() {
    this.getClaimsButton().click(); 
  }

  verifyClaimsModalVisible() {
    this.getClaimsModal().should("be.visible"); 
  }

  verifyLinkVisible(linkPartialHref) {
    this.getLink(linkPartialHref).should("be.visible"); 
  }

  clickLink(linkPartialHref) {
    this.getLink(linkPartialHref).click({ force: true }); 
  }

  verifyUrlContains(partUrl) {
    cy.url().should("include", partUrl); 
  }

    // Locator for search input
    getSearchInput() {
      return cy.get('[name="_com_liferay_portal_search_web_portlet_SearchPortlet_keywords"]');
    }
  
    // Locator for search results
    getSearchResultsHeader() {
      return cy.contains('Search Results');
    }
  
    // Locator for the image that should exist after visiting
    getResponsiveImage() {
      return cy.get('.img-responsive');
    }
  
    // Locator for the number of search results
    getSearchResultsCount() {
      return cy.get('.pagination-results'); // Placeholder, replace with the correct selector
    }
  
    // Locator for the no results message
    getNoResultsMessage() {
      return cy.contains('No results were found that matched the keywords:');
    }
    // Locator for pagination (if any)
    getPagination() {
      return cy.get('.pagination'); // Placeholder, replace with correct selector
    }
  
    // Action to search for a term
    searchFor(term) {
      this.getSearchInput().type(`${term}{enter}`);
    }
  
    // Verify search results are displayed
    verifySearchResultsVisible() {
      this.getSearchResultsHeader().should('be.visible');
    }
  
    // Verify number of search results is greater than 0
    verifySearchResultsCount() {
      this.getSearchResultsCount().should('exist').and('not.have.text', '0');
    }
  
    // Verify no results message is displayed
    verifyNoResults() {
      this.getNoResultsMessage().should('be.visible');
    }
  
    // Verify pagination exists if there are many results
    verifyPaginationExists() {
      this.getPagination().should('be.visible');
    }
  
    // Action to check if the image is visible on the home page
    verifyResponsiveImageExists() {
      this.getResponsiveImage().should('exist');
    }
    clickInsuranceButton() {
      this.insuranceButton().should('be.visible').click();
    }
  
    clickClaimsButton() {
      this.claimsButton().should('be.visible').click();
    }
  
    clickStormsButton() {
      this.stormsButton().should('be.visible').click();
    }
  
    clickLearningButton() {
      this.learningButton().should('be.visible').click();
    }
  
    clickNewsButton() {
      this.newsButton().should('be.visible').click();
    }
  
    clickAboutUsButton() {
      this.aboutUsButton().should('be.visible').click();
    }
     // Button locators for navigation
  insuranceButton() {
    return cy.get("#siteNavModalBtn_menu_1");
  }

  claimsButton() {
    return cy.get("#siteNavModalBtn_menu_2");
  }

  stormsButton() {
    return cy.get("#siteNavModalBtn_menu_3");
  }

  learningButton() {
    return cy.get("#siteNavModalBtn_menu_4");
  }

  newsButton() {
    return cy.get("#siteNavModalBtn_menu_5");
  }

  aboutUsButton() {
    return cy.get("#siteNavModalBtn_menu_6");
  }

  // Action methods for clicking buttons
  clickInsuranceButton() {
    this.insuranceButton().should('be.visible').click();
  }

  clickClaimsButton() {
    this.claimsButton().should('be.visible').click();
  }

  clickStormsButton() {
    this.stormsButton().should('be.visible').click();
  }

  clickLearningButton() {
    this.learningButton().should('be.visible').click();
  }

  clickNewsButton() {
    this.newsButton().should('be.visible').click();
  }

  clickAboutUsButton() {
    this.aboutUsButton().should('be.visible').click();
  }

  // Assertion methods to verify each modal's text
  verifyInsuranceModal() {
    cy.get('[id="siteNavModalBtn_modal_1"]').should("contain.text", "Insurance");
  }

  verifyClaimsModal() {
    cy.get("div[id='siteNavModalContent_2'] a[class='mr-4 text-decoration-none'] span").should("contain.text", "Claims");
  }

  verifyStormsModal() {
    cy.get("div[id='siteNavModalContent_3'] a[class='mr-4 text-decoration-none'] span").should("contain.text", "Storms");
  }

  verifyLearningModal() {
    cy.get('[id="siteNavModalBtn_modal_4"]').should("contain.text", "Learning");
  }

  verifyNewsModal() {
    cy.get('[id="siteNavModalBtn_modal_5"]').should("contain.text", "News");
  }

  verifyAboutUsModal() {
    cy.get('[id="siteNavModalBtn_modal_6"]').should("contain.text", "About Us");
  }

}

export default HomePage;
