/// <reference types="Cypress" />
import "cypress-file-upload";

describe("testing theologians pen using hooks", () => {

  before("test starting", () => {
    cy.log("test starting up...")
  })
  beforeEach("login theologians pen app", () => {
    // custom command which handles the entire login process that we can just call
    cy.loginTheologianAdmin();
  })

  // beforeEach("go to upload page", () => {
  //   cy.get('button[aria-haspopup="menu"]').click();
  //   cy.get("#upload-btn").click();
  //   cy.wait(3000);
  // })

  it("test file upload button", () => {
    cy.wait(3000);
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get("#upload-btn").click();
    cy.get(".css-k008qs>input[type='file']").attachFile({fileName: "test.txt", filePath:"./files/test.txt"});
    cy.get("input#title").should("be.visible");
    cy.wait(3000);
  })

  it("test file upload drag and drop", () => {
    cy.wait(3000);
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get("#upload-btn").click();
    cy.get("div[class='css-16rbq1h'] div[role='button']")
    .attachFile({fileName: "test.txt", filePath:"./files/test.txt"}, { subjectType:  'drag-n-drop'});
    cy.get("input#title").should("be.visible");
    cy.wait(3000);
  })

  // afterEach("make app wait after each suite", () => {
  //   cy.wait(3000);
  // })

  afterEach("logout the app if admin", () => {
    // custom command clickLink();
    cy.clickLink("Home")
    cy.get('button[aria-haspopup="menu"]').click();
    cy.get('[data-index="10"]').click();
  })

  after("success messgae", () => {
    cy.log("test successful....")
  })
})