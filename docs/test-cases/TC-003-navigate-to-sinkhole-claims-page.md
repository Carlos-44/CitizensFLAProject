# TC-003: Navigate to Sinkhole Claims page

- **Priority:** P2
- **Linked criteria:** F-01 AC-03 ([F-01](../features/F-01-claims-section-navigation.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-claims.spec.cy.js — "[TC-003] should navigate to "Sinkhole Claims" page"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Sinkhole Claims" link. | The URL should contain "/sinkhole-claims". |

**Pass criteria:** The URL should contain "/sinkhole-claims".

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-003] Navigate to Sinkhole Claims page" in `cypress/e2e/features/claims.feature`.
