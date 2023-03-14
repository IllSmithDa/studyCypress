# Cypress - Interacting with Elements
 
  1. Cypress allows you to test various interactions with HTML elements 

# Radio Buttons and Check Boxes 

  1. You can use check() to automatically test to see if check boxes are checked
     or not

    e.g
    cy.get("#blueCheck").check().should("be.checked");
    cy.get("#redCheck").uncheck().should("not.be.checked");

      a. We are testing the first checkbox as checked and unchecking the second checkbox 
  
  2. Cypress will select and apply changes to multiple elements as well using
     the same methods 

    e.g
    cy.get("input.PrivateSwitchBase-input[type='checkbox']").check().should('be.checked');

      a. There are two checkboxes that share all these characteristics and both will be checked as a result

  3. Cypress also allows you to specify if you want to just retrieve the first
     or last element of a group of elements 

    e.g
    cy.get("input.PrivateSwitchBase-input[type='checkbox']").last().uncheck().should("not.be.checked")
    cy.get("input.PrivateSwitchBase-input[type='checkbox']").first().should("be.checked");

      a. First statement checks the last checkbox only and the second test only selects the first checkbox to see that the the element is still checked


  