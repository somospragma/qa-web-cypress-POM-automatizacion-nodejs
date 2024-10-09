const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/src/tests/*.js",
    baseUrl: "https://www.automationexercise.com/",
    setupNodeEvents(on, config) {},
  },
});
