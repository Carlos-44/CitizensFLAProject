import HomePage from "../page_objects/HomePage";

describe("Header Navigation Menu", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visitHomePage(""); // This will run before each test
  });

  
  it('[TC-010] should click and confirm "Insurance" button leads to the correct page', () => {
    homePage.clickInsuranceButton();
    homePage.verifyInsuranceModal(); // Verify the modal contains the correct text
  });

  it('[TC-011] should click and confirm "Claims" button leads to the correct page', () => {
    homePage.clickClaimsButton();
    homePage.verifyClaimsModal(); // Verify the modal contains the correct text
  });

  it('[TC-012] should click and confirm "Storms" button leads to the correct page', () => {
    homePage.clickStormsButton();
    homePage.verifyStormsModal(); // Verify the modal contains the correct text
  });

  it('[TC-013] should click and confirm "Learning" button leads to the correct page', () => {
    homePage.clickLearningButton();
    homePage.verifyLearningModal(); // Verify the modal contains the correct text
  });

  it('[TC-014] should click and confirm "News" button leads to the correct page', () => {
    homePage.clickNewsButton();
    homePage.verifyNewsModal(); // Verify the modal contains the correct text
  });

  it('[TC-015] should click and confirm "About Us" button leads to the correct page', () => {
    homePage.clickAboutUsButton();
    homePage.verifyAboutUsModal(); // Verify the modal contains the correct text
  });
});
