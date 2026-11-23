# TC-015: Navigate to About Us section

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/navigation.feature` ("Navigate to About Us section"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "About Us" navigation button. | The About Us modal should be visible and contain "About Us". |

**Pass criteria:** The About Us modal should be visible and contain "About Us".
