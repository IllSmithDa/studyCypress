/// <reference types="Cypress" />
describe("IFrame Box Test", () => {
  it.only("IFrame assertions", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#inlineFrameExample")
    .its('0.contentDocument.body')
    .should('be.visible')
  })
});