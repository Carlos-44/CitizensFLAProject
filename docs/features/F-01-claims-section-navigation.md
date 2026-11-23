# F-01: Claims Section Navigation
Status: Draft

## Summary (2 to 3 sentences)
Covers "Claims Section Navigation" on https://www.citizensfla.com, a public website. The behavior is read from `cypress/e2e/features/claims.feature` [INFERRED: there's no product spec].

## User story
As a Citizens Property Insurance customer I want to navigate to claims-related pages from the homepage So that I can access claims services quickly

## Preconditions
- I am on the Citizens Property Insurance homepage.

## Functional requirements (FR-NN)
- FR-01: Navigate to Contact Citizens First page.
- FR-02: Navigate to Report a Claim page.
- FR-03: Navigate to Sinkhole Claims page.
- FR-04: Navigate to Loss Inspection page.
- FR-05: Navigate to Report Fraud page.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Navigate to Contact Citizens First page: the URL should contain "/call-citizens-first".
- AC-02: Navigate to Report a Claim page: the URL should contain "/report-a-claim".
- AC-03: Navigate to Sinkhole Claims page: the URL should contain "/sinkhole-claims".
- AC-04: Navigate to Loss Inspection page: the URL should contain "/loss-inspection".
- AC-05: Navigate to Report Fraud page: the URL should contain "/insurance-fraud".

## Out of scope
- Any page content beyond what the scenarios check. Signed-in areas.

## Open questions
- Open question: the site is a live third-party production site, so its markup and URLs can change without notice.

## Source files this feature touches
- cypress/e2e/features/claims.feature
- cypress/e2e/citizensfla-*.spec.cy.js (Cypress)
