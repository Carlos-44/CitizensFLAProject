import HomePage from "../page_objects/HomePage";

describe("Claims Section Tab", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    
    cy.visit('/'); 
    
  });

  it('should navigate to "Contact Citizens First" page', () => {
    // Click the link and verify the navigation
    homePage.getContactCitizensFirstLink().click({ force: true });
    homePage.verifyUrlContains("/call-citizens-first"); // Verify URL
  });

  it('should navigate to "Report a Claim" page', () => {
    homePage.getReportAClaimLink().eq(1).click({ force: true });
    homePage.verifyUrlContains("/report-a-claim"); // Verify URL
  });

  it('should navigate to "Sinkhole Claims" page', () => {
    homePage.getSinkholeClaimsLink().eq(1).click({ force: true });
    homePage.verifyUrlContains("/sinkhole-claims"); // Verify URL
  });

  it('should navigate to "Loss Inspection" under "After a Loss"', () => {
    homePage.getLossInspectionLink().eq(1).click({ force: true });
    homePage.verifyUrlContains("/loss-inspection"); // Verify URL
  });

  it('should navigate to "Report Fraud" under "Insurance Fraud"', () => {
    homePage.getInsuranceFraudLink().eq(1).click({ force: true });
    homePage.verifyUrlContains("/insurance-fraud"); // Verify URL
  });
});
