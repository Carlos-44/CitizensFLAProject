# F-02: Footer Links
Status: Draft

## Summary (2 to 3 sentences)
Covers "Footer Links" on https://www.citizensfla.com, a public website. The behavior is read from `cypress/e2e/features/footer.feature` [INFERRED: there's no product spec].

## User story
As a website visitor I want to click footer links on the Citizens Property Insurance website So that I can access legal and accessibility information

## Preconditions
- I am on the Citizens Property Insurance homepage.
- I scroll to the bottom of the page.

## Functional requirements (FR-NN)
- FR-01: Click Terms and Conditions link.
- FR-02: Click Privacy Policy link.
- FR-03: Click Site Map link.
- FR-04: Click Accessibility link.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Click Terms and Conditions link: the Terms and Conditions page should open.
- AC-02: Click Privacy Policy link: the Privacy Policy page should open.
- AC-03: Click Site Map link: the Site Map page should open.
- AC-04: Click Accessibility link: the Accessibility page should open.

## Out of scope
- Any page content beyond what the scenarios check. Signed-in areas.

## Open questions
- Open question: the site is a live third-party production site, so its markup and URLs can change without notice.

## Source files this feature touches
- cypress/e2e/features/footer.feature
- cypress/e2e/citizensfla-*.spec.cy.js (Cypress)
