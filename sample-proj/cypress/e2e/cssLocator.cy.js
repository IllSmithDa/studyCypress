
describe('CSSLocators', () => {
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
  })
  it('csslocators', () => {
    cy.visit("https://theologianspen.com");
    cy.get("button#contact-us").click();
    cy.get('input[name="contactName"').type(Cypress.env("dummy_name"))
    cy.get('input[name="contactEmail"').type(Cypress.env("dummy_email"))
    cy.get('textarea[name="contactMessage"').should('exist')
    // cy.get('input#submit-contact-form').click();
    // cy.get("p#msg-error").should('exist')
    cy.get('[aria-label="Close"').click();
    cy.get('#landing-signin').click();
    cy.get('[type="password"]').should('exist');
    cy.get('#signup-button').click();
    cy.get('input#username').should('exist');
    cy.get('#main-logo').click();
  })
  it('should login', () => {
    cy.visit("https://theologianspen.com");
    cy.get('#landing-signin').click();
    cy.get('input#email').type(Cypress.env("email"))
    cy.get('input#password').type(Cypress.env("password"))
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get('[data-index="3"]').click();
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get('[data-index="4"]').click();
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get('[data-index="10"]').click();
  })
})