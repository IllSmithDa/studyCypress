# Custom commands

  1. Custom commands provides extra functionality that isn't supported by native
     cypress
  
    e.g
    cy.get("#product-title").should("have.text", "Apple Macbook Pro");

  2. You can access custom commmands using the commands.js file in the support folder

    e.g
    Cypress.Commands.add('clickLink', (text) => {
      cy.get("a").contains(text).click();
    })

      a. We just created a new command called 'clickLink' which will check if the <a> tag contains the label we pass into the function

    it("grab the text 'home' and click", () => {
      cy.clickLink("Home");
    })
      
      a. Cosume our newly created custom command called 'clickLink' to find the Home link and click on it to go home fast

    e.g
    Cypress.Commands.add('loginTheologianAdmin', () => {
      cy.visit("https://theologianspen.com/login");
      cy.get('#email').type(Cypress.env("email"))
      cy.get('#password').type(Cypress.env("password"))
      cy.get('form > .chakra-button').click()
    })

      a. Command that will handle login to the app

    beforeEach("logins", () => {
      cy.loginTheologianAdmin();
    })

      b. consumes the command we just created

# Overwrite commands

  1. We can overwrite function we have currently written in commands.js

    e.g
    Cypress.Commands.add('clickLink', (text) => {
      cy.get("a").contains(text).click();
    })

    Cypress.Commands.overwrite('contains', (ogFunc, subject, filter, text, options = {}) => {
      if (typeof text === 'object') {
        options = text
        text = filter
        filter = undefined
      }
      options.matchCase = false;
      return originalFn(subject, filter, text, options)
    })