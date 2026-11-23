# TC-001: Navigate to Contact Citizens First page

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/claims.feature` ("Navigate to Contact Citizens First page"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Contact Citizens First" link in the claims section. | The URL should contain "/call-citizens-first". |

**Pass criteria:** The URL should contain "/call-citizens-first".
