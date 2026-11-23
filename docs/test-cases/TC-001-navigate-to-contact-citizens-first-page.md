# TC-001: Navigate to Contact Citizens First page

- **Priority:** P2
- **Linked criteria:** F-01 AC-01 ([F-01](../features/F-01-claims-section-navigation.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-claims.spec.cy.js — "[TC-001] should navigate to "Contact Citizens First" page"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Contact Citizens First" link in the claims section. | The URL should contain "/call-citizens-first". |

**Pass criteria:** The URL should contain "/call-citizens-first".

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-001] Navigate to Contact Citizens First page" in `cypress/e2e/features/claims.feature`.
