# TC-002: Navigate to Report a Claim page

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/claims.feature` ("Navigate to Report a Claim page"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Report a Claim" link. | The URL should contain "/report-a-claim". |

**Pass criteria:** The URL should contain "/report-a-claim".
