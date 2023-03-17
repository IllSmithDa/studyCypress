/// <reference types="Cypress" />
describe("Simple fixtures test", () => {
  it("retrieve fixtures and test it", () => {
    cy.fixture("login-data").then((data) => {
      cy.log(data.email);
      assert.equal(data.email, "hello@cypress.io");
    })
  })
  it("tries using await method", async () => {
    const data = await cy.fixture("login-data");
    cy.log(data.email);
    expect(data.email).to.eq("hello@cypress.io");
  })
});