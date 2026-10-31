Feature: Search Functionality
  As a website visitor
  I want to search for content on the Citizens Property Insurance website
  So that I can quickly find relevant information

  Background:
    Given I am on the Citizens Property Insurance homepage with a 1400x900 viewport
    And the homepage responsive image is visible

  Scenario: Search with a valid term returns results
    When I search for "insurance"
    Then the search results page should be visible

  Scenario: Search with an invalid term shows no results
    When I search for "xyzzy123notfound"
    Then the no results message should be displayed

  Scenario: Search with a common term shows pagination
    When I search for "coverage"
    Then the search results page should be visible
    And the pagination should be present

  Scenario: Clearing search input restores default content
    When I search for "insurance"
    And I clear the search input
    Then the search input should be empty
    And the homepage responsive image should be visible

  Scenario: Empty search preserves default content
    When I search for ""
    Then the homepage responsive image should be visible
