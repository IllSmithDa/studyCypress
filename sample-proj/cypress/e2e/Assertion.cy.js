describe("Assertions Demo", () => {
  it("implicit assertions", () => {
    cy.visit("https://theologianspen.com");

    cy.url().should('contain', 'theologianspen')
      .and('contain', "theologianspen.com")
      .and('not.contain', 'ketchup')

    cy.title().should('eq', "Theologian's Pen")

    cy.get('#main-logo').should('exist')
      .and('be.visible');

    cy.get('.css-4veo8f > .chakra-image').should('exist')
      .and('be.visible');
      
    cy.get('#landing-signin').click();
    cy.get('#email').type(Cypress.env("email"))
    
  })
  it("explicit assertions", async () => {
    cy.visit("https://theologianspen.com");
    cy.get('#landing-signin').click();
    cy.get('#email').type(Cypress.env("email"))
    cy.get('#password').type(Cypress.env("password"))
    cy.get('form > .chakra-button').click()
    let expectedText = "Home"
    cy.get('[data-testid="logged-nav-home"] > .chakra-link > .chakra-text')
      .then((ele) => {
        let elementText = ele.text();
        expect(elementText).to.equal(expectedText);
        expect(elementText).to.not.equal('Test');
        assert.equal(elementText, expectedText)
        assert.notEqual(elementText, 'Test')
      })
  })
})