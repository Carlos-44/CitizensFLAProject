# TC-005: Navigate to Report Fraud page

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/claims.feature` ("Navigate to Report Fraud page"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Insurance Fraud" link. | The URL should contain "/insurance-fraud". |

**Pass criteria:** The URL should contain "/insurance-fraud".
