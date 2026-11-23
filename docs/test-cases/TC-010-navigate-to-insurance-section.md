# TC-010: Navigate to Insurance section

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/navigation.feature` ("Navigate to Insurance section"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Insurance" navigation button. | The Insurance modal should be visible and contain "Insurance". |

**Pass criteria:** The Insurance modal should be visible and contain "Insurance".
