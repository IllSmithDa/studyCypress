/// <reference types="Cypress" />
describe("Alert Box Test", () => {

  beforeEach("visit page", () => {
    cy.visit("http://localhost:5173/");
  });
  
  it.only("alert box assertions", () => {
    // testing alert
    cy.get("button#alert-button").click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains("I am a JS Alert");
    })
    cy.get("p#answer").should("have.text", "I am a JS Alert")

    // testing confirm and note that Cypress will auto close alert box 
    cy.get("button#confirm-button").click();
    cy.on('window:confirm', (text) => {
      expect(text).to.contains("I am a JS Confirm");
    })

    //cancel the confirmation box. Will need to use some side ffect to 
    cy.get("button#confirm-button").click();
    cy.on('window:confirm', (text) => {
      expect(text).to.contains("I am a JS Confirm");
      return false;
    })
    cy.get("p#answer").should("have.text", "I cancelled a JS Confirm")

    cy.get("button#prompt-button").click();
    cy.on('window:prompt', () => false)
    cy.get("p#answer").should("have.text", "I cancelled a JS Prompt")
  })
  it("prompt testing", () => {
    // sets the prompt answer to welcom 
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome")
    })
    cy.get("button#prompt-button").click();
    cy.get("p#answer").should("have.text", "welcome")

  })
});