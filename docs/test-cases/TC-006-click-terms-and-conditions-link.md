# TC-006: Click Terms and Conditions link

- **Priority:** P2
- **Status:** Manual only
- **Automation:** Manual only: live production site. An automated scenario exists in `cypress/e2e/features/footer.feature` ("Click Terms and Conditions link"). Not run in this work.

## Preconditions
- https://www.citizensfla.com is reachable.
- I am on the Citizens Property Insurance homepage.
- I scroll to the bottom of the page.

## Test data
- Values as written in the scenario steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | I click the "Terms & Conditions" footer link. | The Terms and Conditions page should open. |

**Pass criteria:** The Terms and Conditions page should open.
