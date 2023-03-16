/// <reference types="Cypress" />
describe("capture mouse event", () => {
  beforeEach("visit website", () => {
    cy.visit("http://localhost:5173/");
  })
  it("mouse hover event", () => {
    cy.get("#mouse-over-popover").should("not.exist")

    cy.get("p[class='MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root']")
      .trigger("mouseover").click();

    cy.get("#mouse-over-popover").should("exist")
  })
  it("mouse scroll Event", () => {
    cy.get("ul:nth-child(2) li:nth-child(1) a:nth-child(1) h2:nth-child(1)").scrollIntoView({duration: 5000});
    cy.get("ul:nth-child(2) li:nth-child(1) a:nth-child(1) h2:nth-child(1)").should("be.visible");
  })
})