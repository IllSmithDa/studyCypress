/// <reference types="Cypress" />
describe("screenshot testing", ()=> {
  beforeEach("visit the page", () => {
    cy.visitTheologians();
  })
  it.skip("theolgianspen screenshots", () => {
    cy.wait(5000);
    cy.screenshot("homepage");
    cy.wait(5000);
    cy.get("img[alt='Group of Theologians']").should("be.visible").screenshot("main-image");
  })
  it('pass'
  , () => {
    cy.wait(3000);
    cy.get("img[alt='Group of Theologians']").should("be.visible");
  })
  it('failed test to trigger screenshot capture', () => {
    cy.wait(3000);
    cy.get("#main-logo").should("have.text", "Theologians Pen");
  })
})