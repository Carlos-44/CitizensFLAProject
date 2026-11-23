# TC-016: Search with a valid term returns results

- **Priority:** P2
- **Linked criteria:** F-04 AC-01 ([F-04](../features/F-04-search-functionality.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-search.spec.cy.js — "[TC-016] should search for a valid term and display results"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage with a 1400x900 viewport.
- The homepage responsive image is visible.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I search for "insurance". | The search results page should be visible. |

**Pass criteria:** The search results page should be visible.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-016] Search with a valid term returns results" in `cypress/e2e/features/search.feature`.
