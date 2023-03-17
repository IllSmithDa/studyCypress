import "cypress-file-upload";

describe("Assertions Demo", () => {
  before("assumes user is logged in and is an admin", () => {
      cy.visit("https://theologianspen.com/login");
      cy.get('#email').type(Cypress.env("email"))
      cy.get('#password').type(Cypress.env("password"))
      cy.get('form > .chakra-button').click()
  });

  it("test upload functionality", () => {
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get("#upload-btn").click();
    cy.wait(3000);
    cy.get(".css-k008qs>input[type='file']").attachFile({fileName: "test.txt", filePath:"./files/test.txt"});
    cy.get("input#title").should("be.visible");
    cy.wait(3000);
    cy.get("button[type='cancel']").click();
    cy.wait(3000);

    // test drag and drop functionality
    cy.get("div[class='css-16rbq1h'] div[role='button']")
      .attachFile({fileName: "test.txt", filePath:"./files/test.txt"}, { subjectType:  'drag-n-drop'});
    cy.wait(3000);
    cy.get("input#title").should("be.visible");
      // test drag and drop
  })
});
