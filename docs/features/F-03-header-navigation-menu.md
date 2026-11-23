# F-03: Header Navigation Menu
Status: Draft

## Summary (2 to 3 sentences)
Covers "Header Navigation Menu" on https://www.citizensfla.com, a public website. The behavior is read from `cypress/e2e/features/navigation.feature` [INFERRED: there's no product spec].

## User story
As a website visitor I want to use the header navigation menu on the Citizens Property Insurance website So that I can explore different sections of the site

## Preconditions
- I am on the Citizens Property Insurance homepage.

## Functional requirements (FR-NN)
- FR-01: Navigate to Insurance section.
- FR-02: Navigate to Claims section.
- FR-03: Navigate to Storms section.
- FR-04: Navigate to Learning section.
- FR-05: Navigate to News section.
- FR-06: Navigate to About Us section.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Navigate to Insurance section: the Insurance modal should be visible and contain "Insurance".
- AC-02: Navigate to Claims section: the Claims modal should be visible and contain "Claims".
- AC-03: Navigate to Storms section: the Storms modal should be visible and contain "Storms".
- AC-04: Navigate to Learning section: the Learning modal should be visible and contain "Learning".
- AC-05: Navigate to News section: the News modal should be visible and contain "News".
- AC-06: Navigate to About Us section: the About Us modal should be visible and contain "About Us".

## Out of scope
- Any page content beyond what the scenarios check. Signed-in areas.

## Open questions
- Open question: the site is a live third-party production site, so its markup and URLs can change without notice.

## Source files this feature touches
- cypress/e2e/features/navigation.feature
- cypress/e2e/citizensfla-*.spec.cy.js (Cypress)
