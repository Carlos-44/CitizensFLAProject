# TC-014: Navigate to News section

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/navigation.feature` ("Navigate to News section"). Not run in this work.

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
