# TC-019: Clearing search input restores default content

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/search.feature` ("Clearing search input restores default content"). Not run in this work.

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
