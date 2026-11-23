# TC-013: Navigate to Learning section

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/navigation.feature` ("Navigate to Learning section"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Learning" navigation button. | The Learning modal should be visible and contain "Learning". |

**Pass criteria:** The Learning modal should be visible and contain "Learning".
