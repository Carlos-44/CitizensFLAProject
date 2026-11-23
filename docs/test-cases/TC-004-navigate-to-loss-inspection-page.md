# TC-004: Navigate to Loss Inspection page

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/claims.feature` ("Navigate to Loss Inspection page"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Loss Inspection" link. | The URL should contain "/loss-inspection". |

**Pass criteria:** The URL should contain "/loss-inspection".
