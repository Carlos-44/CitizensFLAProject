Feature: Claims Section Navigation
  As a Citizens Property Insurance customer
  I want to navigate to claims-related pages from the homepage
  So that I can access claims services quickly

  Background:
    Given I am on the Citizens Property Insurance homepage

  Scenario: [TC-001] Navigate to Contact Citizens First page
    When I click the "Contact Citizens First" link in the claims section
    Then the URL should contain "/call-citizens-first"

  Scenario: [TC-002] Navigate to Report a Claim page
    When I click the "Report a Claim" link
    Then the URL should contain "/report-a-claim"

  Scenario: [TC-003] Navigate to Sinkhole Claims page
    When I click the "Sinkhole Claims" link
    Then the URL should contain "/sinkhole-claims"

  Scenario: [TC-004] Navigate to Loss Inspection page
    When I click the "Loss Inspection" link
    Then the URL should contain "/loss-inspection"

  Scenario: [TC-005] Navigate to Report Fraud page
    When I click the "Insurance Fraud" link
    Then the URL should contain "/insurance-fraud"
