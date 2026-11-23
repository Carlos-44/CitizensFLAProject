# TC-007: Click Privacy Policy link

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/footer.feature` ("Click Privacy Policy link"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.
- I scroll to the bottom of the page.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Privacy Policy" footer link. | The Privacy Policy page should open. |

**Pass criteria:** The Privacy Policy page should open.
