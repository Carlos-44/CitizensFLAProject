# TC-009: Click Accessibility link

- **Priority:** P2
- **Linked criteria:** F-02 AC-04 ([F-02](../features/F-02-footer-links.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-footer.spec.cy.js — "[TC-009] should have an Accessibility link and click it"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.
- I scroll to the bottom of the page.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Accessibility" footer link. | The Accessibility page should open. |

**Pass criteria:** The Accessibility page should open.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-009] Click Accessibility link" in `cypress/e2e/features/footer.feature`.
