# TC-004: Navigate to Loss Inspection page

- **Priority:** P2
- **Linked criteria:** F-01 AC-04 ([F-01](../features/F-01-claims-section-navigation.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-claims.spec.cy.js — "[TC-004] should navigate to "Loss Inspection" under "After a Loss""

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Loss Inspection" link. | The URL should contain "/loss-inspection". |

**Pass criteria:** The URL should contain "/loss-inspection".

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-004] Navigate to Loss Inspection page" in `cypress/e2e/features/claims.feature`.
