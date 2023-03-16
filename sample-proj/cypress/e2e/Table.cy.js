/// <reference types="Cypress" />
describe("Alert Box Test", () => {

  beforeEach("visit page", () => {
    cy.visit("http://localhost:5173/");
  })

  // number of rows 
  it('numnber of rows', () => {
    cy.get("table[aria-label='product-table']>tbody>tr").should('have.length', '3')
  })

  it('numnber of columns', () => {
    cy.get("table[aria-label='product-table']>thead>tr>th").should('have.length', '6')
  })

  it('check cell data and validate data', () => {
    cy.get("table[aria-label='product-table']>thead>tr>th:nth-child(3)>span").contains("Category")
  })

  it('read the entire table', () => {
    let totalPages = 5;
    for (let p=1; p < totalPages; p++) {
      if (totalPages> 1) {
        cy.get("nav[aria-label='pagination navigation']>ul>li:nth-child("+p+")").click();
        cy.wait(3000);
        // check something else 
        cy.get("table[aria-label='product-table']>tbody>tr")
        .each(($row, index, $rows) => {
          // wrapping each row and getting each 'td' and getting one column using 'td'
          cy.wrap($row).within(() => {
            cy.get("td").each(($col, index, $cols) => {
              cy.log($col.text())
            })
          })  
        })
    
      }
    }
  })
  
});