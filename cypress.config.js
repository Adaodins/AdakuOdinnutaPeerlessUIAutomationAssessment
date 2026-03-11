const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 100000,
  watchForFileChanges: false,
  execTimeout: 10000,
viewportHeight: 960,
  viewportWidth: 1600,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
