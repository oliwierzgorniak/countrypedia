import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    video: false,
    specPattern: ["cypress/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
