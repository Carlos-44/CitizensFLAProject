const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Test Results',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportDir: 'cypress/reports/mochawesome',
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/results-[hash].xml',
      toConsole: false,
    },
  },
  e2e: {
    baseUrl: 'https://www.citizensfla.com',
    async setupNodeEvents(on, config) {
      // Cucumber BDD preprocessor plugin (must register before bundler)
      await addCucumberPreprocessorPlugin(on, config);

      // esbuild bundler with Cucumber support for .feature files
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    viewportWidth: 1440,
    viewportHeight: 900,
    retries: {
      runMode: 2,
      openMode: 1,
    },
    defaultCommandTimeout: 30000,
    specPattern: 'cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,feature}',
    supportFile: 'cypress/support/e2e.js',
  },
});
