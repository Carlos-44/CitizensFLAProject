# TC-018: Search with a common term shows pagination

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/search.feature` ("Search with a common term shows pagination"). Not run in this work.

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
