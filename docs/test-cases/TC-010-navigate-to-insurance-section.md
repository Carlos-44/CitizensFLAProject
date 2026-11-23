# TC-010: Navigate to Insurance section

- **Priority:** P2
- **Linked criteria:** F-03 AC-01 ([F-03](../features/F-03-header-navigation-menu.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-navigation.spec.cy.js — "[TC-010] should click and confirm "Insurance" button leads to the correct page"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Insurance" navigation button. | The Insurance modal should be visible and contain "Insurance". |

**Pass criteria:** The Insurance modal should be visible and contain "Insurance".

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-010] Navigate to Insurance section" in `cypress/e2e/features/navigation.feature`.
