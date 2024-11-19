import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    specPattern: "cypress/src/tests/*.ts",
    baseUrl: "https://www.automationexercise.com",
    setupNodeEvents(on: any, config: any) {},
  },
});
