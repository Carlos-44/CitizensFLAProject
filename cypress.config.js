const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.citizensfla.com',
    viewportWidth: 1440,
    viewportHeight: 900,
    retries: {
      runMode: 2,
      openMode: 1,
    },
    defaultCommandTimeout: 30000,  // Increase default command timeout to 30 seconds
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
});
