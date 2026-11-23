# TC-014: Navigate to News section

- **Priority:** P2
- **Linked criteria:** F-03 AC-05 ([F-03](../features/F-03-header-navigation-menu.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-navigation.spec.cy.js — "[TC-014] should click and confirm "News" button leads to the correct page"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "News" navigation button. | The News modal should be visible and contain "News". |

**Pass criteria:** The News modal should be visible and contain "News".

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-014] Navigate to News section" in `cypress/e2e/features/navigation.feature`.
