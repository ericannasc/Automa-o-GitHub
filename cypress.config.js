const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 60000,      
    requestTimeout: 20000, 
    responseTimeout: 30000,   

    setupNodeEvents(on, config) {
      config.env.EMAIL = process.env.EMAIL;
      config.env.PASSWORD = process.env.PASSWORD;
      config.env.USUARIO = process.env.USUARIO;

      on("after:screenshot", (details) => {
        console.log("Screenshot salvo:", details.path);
      });

      return config;
    },
    screenshotOnRunFailure: true,
    video: true,     

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    }
  }
});