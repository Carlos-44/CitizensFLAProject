Feature: Header Navigation Menu
  As a website visitor
  I want to use the header navigation menu on the Citizens Property Insurance website
  So that I can explore different sections of the site

  Background:
    Given I am on the Citizens Property Insurance homepage

  Scenario: Navigate to Insurance section
    When I click the "Insurance" navigation button
    Then the Insurance modal should be visible and contain "Insurance"

  Scenario: Navigate to Claims section
    When I click the "Claims" navigation button
    Then the Claims modal should be visible and contain "Claims"

  Scenario: Navigate to Storms section
    When I click the "Storms" navigation button
    Then the Storms modal should be visible and contain "Storms"

  Scenario: Navigate to Learning section
    When I click the "Learning" navigation button
    Then the Learning modal should be visible and contain "Learning"

  Scenario: Navigate to News section
    When I click the "News" navigation button
    Then the News modal should be visible and contain "News"

  Scenario: Navigate to About Us section
    When I click the "About Us" navigation button
    Then the About Us modal should be visible and contain "About Us"
