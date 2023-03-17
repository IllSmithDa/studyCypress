# Cypress HTML Reports

  1. Cypress allows you to generate HTML report using an external library 

  2. install one using 'npm i -D cypress-mochawesome-reporter'

  3. Edit config file which is cypress.config.js 

    e.g
    const { defineConfig } = require("cypress");

    module.exports = defineConfig({
      reporter: 'cypress-mochawesome-reporter',
      e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
        }
      }
    }) 
  
  4. import the reporter on the e2e.js in the support folder

    e.g
    import 'cypress-mochawesome-reporter/register';

  5. run report using cli command usin relative file of the cypress file you
     wish to test

    e.g
    npx cypress run --spec cypress\e2e\Screenshots.cy.js

  6. The report will reside in the index.html of the report\html folder and the
     report will give information on why test failed

  7. When running tests, you can specify browser in the cli command using
     --browser
  
    e.g
    npx cypress run --spec cypress\e2e\Screenshots.cy.js --browser firefox

  8. Test done this way be default are done in headless mode but add ing a
     '--headed' tag wil allow you to run in headed mode which will open up the
     testing and run in the browser of your choice 

    e.g
    npx cypress run --headed --spec cypress\e2e\Screenshots.cy.js --browser firefox