# Citizens FLA — Cypress E2E Tests

> Cypress end-to-end test suite for the public [Citizens Property Insurance](https://www.citizensfla.com) website, covering navigation, claims links, footer links, site search and negative login cases.

![Tests](https://github.com/Carlos-44/CitizensFLAProject/actions/workflows/test.yml/badge.svg)

## Tech Stack
- **Language:** JavaScript (Node.js)
- **Framework:** Cypress 13 (+ cypress-xpath)
- **Design:** Page Object Model (`cypress/page_objects/`), shared test data (`cypress/data/`), custom commands
- **CI:** GitHub Actions

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Install
```bash
npm install
```

### Run Tests
```bash
# Run all tests headless
npm test

# Open the interactive Cypress runner
npm run test:open

# Run a specific spec
npx cypress run --spec cypress/e2e/citizensfla-search.spec.cy.js
```

## What's Tested
25 tests across 5 specs (20 active, 5 skipped), all run against the live public site:
- **Header navigation** (`citizensfla-navigation`): Insurance, Claims, Storms, Learning, News and About Us each go to the correct page
- **Claims section** (`citizensfla-claims`): Contact Citizens First, Report a Claim, Sinkhole Claims, Loss Inspection and Report Fraud links
- **Footer links** (`citizensfla-footer`): Terms & Conditions, Privacy Policy, Site Map, Accessibility
- **Search** (`citizensfla-search`): valid and invalid terms, pagination with many results, clearing the input, empty search (the few-results pagination test is skipped because the site now paginates that term)
- **Login, negative cases** (`citizensfla-login`): skipped. The site replaced its login form with a dropdown that links to a separate customer portal, so this spec needs rework

> These tests hit a live third-party website, so content changes or bot protection on the site can cause failures that aren't bugs in the tests.

## CI/CD
Every push and pull request to `main` runs the suite in Chrome on GitHub Actions (see `.github/workflows/test.yml`):
- Cypress writes JUnit XML, and [dorny/test-reporter](https://github.com/dorny/test-reporter) publishes it as a GitHub Check
- Failure screenshots are uploaded as artifacts for 14 days

## Author
Carlos Ozoria — [LinkedIn](https://www.linkedin.com/in/carlos-ozoria-0a292030b)
