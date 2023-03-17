/// <reference types="Cypress" />
describe("testing navigation funcitonality", () => {
  it("basic navigation tests", () => {

    cy.visitTheologians();
    cy.get("img[alt='Group of Theologians']").should("be.visible");
    cy.wait(3000);

    cy.clickButton("Register");
    cy.get("img[alt='Bible Opened']").should("be.visible");
    cy.wait(3000);

    cy.go("back");
    cy.get("img[alt='Group of Theologians']").should("be.visible");
    cy.wait(3000);

    cy.go(1);
    cy.get("img[alt='Bible Opened']").should("be.visible");
    cy.wait(3000);

    cy.go("back");
    cy.reload();
    cy.get("img[alt='Group of Theologians']").should("be.visible");
  })
})