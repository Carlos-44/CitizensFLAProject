Feature: Footer Links
  As a website visitor
  I want to click footer links on the Citizens Property Insurance website
  So that I can access legal and accessibility information

  Background:
    Given I am on the Citizens Property Insurance homepage
    And I scroll to the bottom of the page

  Scenario: Click Terms and Conditions link
    When I click the "Terms & Conditions" footer link
    Then the Terms and Conditions page should open

  Scenario: Click Privacy Policy link
    When I click the "Privacy Policy" footer link
    Then the Privacy Policy page should open

  Scenario: Click Site Map link
    When I click the "Site Map" footer link
    Then the Site Map page should open

  Scenario: Click Accessibility link
    When I click the "Accessibility" footer link
    Then the Accessibility page should open
