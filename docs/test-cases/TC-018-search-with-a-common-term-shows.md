# TC-018: Search with a common term shows pagination

- **Priority:** P2
- **Linked criteria:** F-04 AC-03 ([F-04](../features/F-04-search-functionality.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-search.spec.cy.js — "[TC-018] should display pagination for a term with many results"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage with a 1400x900 viewport.
- The homepage responsive image is visible.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I search for "coverage". | The search results page should be visible; the pagination should be present. |

**Pass criteria:** The search results page should be visible; the pagination should be present.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-018] Search with a common term shows pagination" in `cypress/e2e/features/search.feature`.
