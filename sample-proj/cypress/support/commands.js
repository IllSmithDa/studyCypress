// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// global cypress import 
// <reference types="Cypress" />
// <reference types="cypress-xpath" />
require('@cypress/xpath');

Cypress.Commands.add('clickLink', (p) => {
  cy.get("a").contains(p).click();
})

Cypress.Commands.add("clickButton", (text) => {
  cy.get("div").contains(text).click();
})

Cypress.Commands.add("visitTheologians", () => {
  cy.visit("https://theologianspen.com/")
})
Cypress.Commands.add('loginTheologianAdmin', () => {
  cy.visit("https://theologianspen.com/login");
  cy.get('#email').type(Cypress.env("email"))
  cy.get('#password').type(Cypress.env("password"))
  cy.get('form > .chakra-button').click()
})