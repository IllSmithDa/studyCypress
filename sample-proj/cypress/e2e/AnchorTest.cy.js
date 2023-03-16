/// <reference types="Cypress" />
describe("Alert Box Test", () => {
  it("alert box assertions", () => {
    cy.visit("http://localhost:5173/");
    cy.get("section[aria-label='Anchor section']>a").then((ele) => {
      const url = ele.attr("href");
      console.log(url);
      cy.visit(url);
    })

    cy.wait(5000);
    cy.url().should("include", "")
  })
});