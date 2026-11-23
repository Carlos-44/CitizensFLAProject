# Test cases: traceability

One manual test-case file per scenario, generated from the Gherkin feature files in `cypress/e2e/features`. Every case is **Manual only: live production site**. The tests target https://www.citizensfla.com, a real insurer's public website. Matching Cypress specs are in `cypress/e2e/citizensfla-*.spec.cy.js`.

| TC ID | Status | Automation file | Manual file |
|---|---|---|---|
| TC-001 | Manual only | `cypress/e2e/features/claims.feature` | [TC-001-navigate-to-contact-citizens-first-page.md](TC-001-navigate-to-contact-citizens-first-page.md) |
| TC-002 | Manual only | `cypress/e2e/features/claims.feature` | [TC-002-navigate-to-report-a-claim-page.md](TC-002-navigate-to-report-a-claim-page.md) |
| TC-003 | Manual only | `cypress/e2e/features/claims.feature` | [TC-003-navigate-to-sinkhole-claims-page.md](TC-003-navigate-to-sinkhole-claims-page.md) |
| TC-004 | Manual only | `cypress/e2e/features/claims.feature` | [TC-004-navigate-to-loss-inspection-page.md](TC-004-navigate-to-loss-inspection-page.md) |
| TC-005 | Manual only | `cypress/e2e/features/claims.feature` | [TC-005-navigate-to-report-fraud-page.md](TC-005-navigate-to-report-fraud-page.md) |
| TC-006 | Manual only | `cypress/e2e/features/footer.feature` | [TC-006-click-terms-and-conditions-link.md](TC-006-click-terms-and-conditions-link.md) |
| TC-007 | Manual only | `cypress/e2e/features/footer.feature` | [TC-007-click-privacy-policy-link.md](TC-007-click-privacy-policy-link.md) |
| TC-008 | Manual only | `cypress/e2e/features/footer.feature` | [TC-008-click-site-map-link.md](TC-008-click-site-map-link.md) |
| TC-009 | Manual only | `cypress/e2e/features/footer.feature` | [TC-009-click-accessibility-link.md](TC-009-click-accessibility-link.md) |
| TC-010 | Manual only | `cypress/e2e/features/navigation.feature` | [TC-010-navigate-to-insurance-section.md](TC-010-navigate-to-insurance-section.md) |
| TC-011 | Manual only | `cypress/e2e/features/navigation.feature` | [TC-011-navigate-to-claims-section.md](TC-011-navigate-to-claims-section.md) |
| TC-012 | Manual only | `cypress/e2e/features/navigation.feature` | [TC-012-navigate-to-storms-section.md](TC-012-navigate-to-storms-section.md) |
| TC-013 | Manual only | `cypress/e2e/features/navigation.feature` | [TC-013-navigate-to-learning-section.md](TC-013-navigate-to-learning-section.md) |
| TC-014 | Manual only | `cypress/e2e/features/navigation.feature` | [TC-014-navigate-to-news-section.md](TC-014-navigate-to-news-section.md) |
| TC-015 | Manual only | `cypress/e2e/features/navigation.feature` | [TC-015-navigate-to-about-us-section.md](TC-015-navigate-to-about-us-section.md) |
| TC-016 | Manual only | `cypress/e2e/features/search.feature` | [TC-016-search-with-a-valid-term-returns.md](TC-016-search-with-a-valid-term-returns.md) |
| TC-017 | Manual only | `cypress/e2e/features/search.feature` | [TC-017-search-with-an-invalid-term-shows.md](TC-017-search-with-an-invalid-term-shows.md) |
| TC-018 | Manual only | `cypress/e2e/features/search.feature` | [TC-018-search-with-a-common-term-shows.md](TC-018-search-with-a-common-term-shows.md) |
| TC-019 | Manual only | `cypress/e2e/features/search.feature` | [TC-019-clearing-search-input-restores-default-content.md](TC-019-clearing-search-input-restores-default-content.md) |
| TC-020 | Manual only | `cypress/e2e/features/search.feature` | [TC-020-empty-search-preserves-default-content.md](TC-020-empty-search-preserves-default-content.md) |

Totals: 20 test cases — 0 Automated, 20 Manual only, 0 Not started.
