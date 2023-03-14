/// <reference types="Cypress" />
describe("series of tests", () => {
  it("Checking radio button", () => {
    cy.visit("http://localhost:5173/");

    /* 
      normal practice to check element exists but you can also check using
     'be.visible' if 'opacity' is not set to '0';
    */
    cy.get("input[value='monday']").should("exist");
    cy.get("input[value='tuesday']").should("exist");
    cy.get("input[value='wednesday']").should("exist");
    cy.get("input[value='thursday']").should("exist");
    cy.get("input[value='friday']").should("exist");
    cy.get("input[value='saturday']").should("exist");
    cy.get("input[value='sunday']").should("exist");

    // select radio button green
    cy.get("input[value='green']").should("exist");
    cy.get("input[value='green']").check().should('be.checked');
    cy.get("input[value='red']").should('not.be.checked')

    // select radio button red 
    cy.get("input[value='red']").should("exist");
    cy.get("input[value='red']").check().should('be.checked');
    cy.get("input[value='green']").should('not.be.checked')
  })

  it("Checking radio button", () => {
    // retrieve check boxes
    cy.visit("http://localhost:5173/");
    cy.get("#redCheck").should("exist");
    cy.get("#blueCheck").should("exist");

    // select checkboxes
    cy.get("#redCheck").check().should("be.checked");
    cy.get("#blueCheck").check().should("be.checked");

    // unselect checkbox
    cy.get("#redCheck").uncheck().should("not.be.checked");

    // get multiple elements using commonly shared element attributes and check
    // all of them. It will auto apply to all applicable elements
    cy.get("input.PrivateSwitchBase-input[type='checkbox']").check().should('be.checked');

    // select only the last of the input
    cy.get("input.PrivateSwitchBase-input[type='checkbox']").last().uncheck().should("not.be.checked")

    // select the first checkbox only
    cy.get("input.PrivateSwitchBase-input[type='checkbox']").first().should("be.checked");
  })
})