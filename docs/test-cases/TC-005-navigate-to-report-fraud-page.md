# TC-005: Navigate to Report Fraud page

- **Priority:** P2
- **Linked criteria:** F-01 AC-05 ([F-01](../features/F-01-claims-section-navigation.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-claims.spec.cy.js — "[TC-005] should navigate to "Report Fraud" under "Insurance Fraud""

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Insurance Fraud" link. | The URL should contain "/insurance-fraud". |

**Pass criteria:** The URL should contain "/insurance-fraud".

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-005] Navigate to Report Fraud page" in `cypress/e2e/features/claims.feature`.
