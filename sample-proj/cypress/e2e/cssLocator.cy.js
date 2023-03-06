
describe('CSSLocators', () => {
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
    cy.get('a#menu-list-25-menuitem-16').click();
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get('button#menu-list-13-menuitem-5').click();
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get('button#menu-list-13-menuitem-11').click();
  })
})