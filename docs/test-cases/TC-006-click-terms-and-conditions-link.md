# TC-006: Click Terms and Conditions link

- **Priority:** P2
- **Linked criteria:** F-02 AC-01 ([F-02](../features/F-02-footer-links.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-footer.spec.cy.js — "[TC-006] should have a Terms & Conditions link and click it"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.
- I scroll to the bottom of the page.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Terms & Conditions" footer link. | The Terms and Conditions page should open. |

**Pass criteria:** The Terms and Conditions page should open.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-006] Click Terms and Conditions link" in `cypress/e2e/features/footer.feature`.
