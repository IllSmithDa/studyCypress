/// <reference types="Cypress" />
describe("dropdown button tests", () => {
  it("test dropdown series", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#age-select").click()
    cy.get("div[id='menu-'] li:nth-child(3)").click()
    cy.get("input[value='20']")
    .should('exist')
    .should("have.value", "20")
  })
  it("wikipedia time", () => {
    
    cy.visit("https://wikipedia.com")

    // type Delhi input 
    cy.get("#searchInput").type("Delhi")
    // check if one of the suggestion links contain 'Delhi univerisity in text
    // and then click it which will go to a new link
    cy.get('.suggestion-link').contains("Delhi University").click();
  })

  
  it("dynamic suggestion", () => {
    cy.visit("http://www.google.com")
    cy.get("input[name='q']").type("cypress automation")

    // wait 3 seconds 
    cy.wait(3000);

    // count the number of responses 
    cy.get("div.wM6W7d>span").should('have.length', 12);
    // alternative method from using contains
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() === "cypress automation jobs") {
        // capture the element and perform the click function
        cy.wrap($el).click();
      }
    })
    // input value should have been retained on the results page
    cy.get("input[name='q']").should("have.value", "cypress automation jobs");
  })
})