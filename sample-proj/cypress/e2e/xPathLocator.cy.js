describe('xpath locators', () => {
  it('xpath locator should having list items', () => {
    cy.visit("https://theologianspen.com");
    cy.xpath("//div[@id='animated-features']/div").should('have.length', 4)
    cy.xpath("//div[@id='features-list']/div").should('have.length', 3)
    cy.xpath("//div[@id='pricing-tiers']/div").should('have.length', 2)
    cy.xpath("//div[@id='footer-links-list']/p").should('have.length', 5)
  })
  it('chains xpaths together', () => {
    cy.visit("https://theologianspen.com");
    cy.xpath("//div[@id='animated-features']").xpath("./div").should('have.length', 4)
  })
})