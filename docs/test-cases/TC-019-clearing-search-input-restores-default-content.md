# TC-019: Clearing search input restores default content

- **Priority:** P2
- **Linked criteria:** F-04 AC-04 ([F-04](../features/F-04-search-functionality.md))
- **Status:** Automated
- **Automation:** cypress/e2e/citizensfla-search.spec.cy.js — "[TC-019] should clear search input and show default content"

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage with a 1400x900 viewport.
- The homepage responsive image is visible.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I search for "insurance". | The action completes without an error. [INFERRED] |
| 2 | I clear the search input. | The search input should be empty; the homepage responsive image should be visible. |

**Pass criteria:** The search input should be empty; the homepage responsive image should be visible.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.14.2, Electron headless, against citizensfla.com): 40/40 (20 Cypress tests + 20 Cucumber scenarios).
- Also automated as the Cucumber scenario "[TC-019] Clearing search input restores default content" in `cypress/e2e/features/search.feature`.
