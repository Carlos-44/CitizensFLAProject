# TC-017: Search with an invalid term shows no results

- **Priority:** P2
- **Linked criteria:** F-04 AC-02 ([F-04](../features/F-04-search-functionality.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-search.spec.cy.js — "[TC-017] should display "No results found" for an invalid search term"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage with a 1400x900 viewport.
- The homepage responsive image is visible.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I search for "xyzzy123notfound". | The no results message should be displayed. |

**Pass criteria:** The no results message should be displayed.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-017] Search with an invalid term shows no results" in `cypress/e2e/features/search.feature`.
