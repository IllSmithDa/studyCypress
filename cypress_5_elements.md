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

# Drop Down

  1. Using click() is the best way to handle and test for drop down buttons 

  e.g
  cy.get("#age-select").click()
  cy.get("div[id='menu-'] li:nth-child(3)").click()
  cy.get("input[value='20']")
    .should('exist')
    .should("have.value", "20")

    a. This is using the MUI components where you select dropdown by its given id, select the child which represents a dropdown item, select it using click() and then test the input to see if it exsists and if it matches the value you selected.

2. You can check for specific value if you recieve a list of suggestion from the
   input box

    e.g
    cy.get("#searchInput").type("Delhi")
    cy.get('.suggestion-link').contains("Delhi University").click();

      a. This check if one of the suggestion links contain 'Delhi univerisity in text
      and then click it which will go to a new link

    e.g
    cy.visit("http://www.google.com")
    cy.get("input[name='q']").type("cypress automation")
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() === "cypress automation jobs") {
        // capture the element and perform the click function
        cy.wrap($el).click();
      }
    })

      a. Here we visit google, type in 'cypress automation' in the search bar,
      return a list of results and we check if any one of the list results are
      "cypress automation jobs"

      b. "div.wM6W7d>span" indicates we are retrieve every instance of a span
      with a div parent with the class name "wM6W7d". We then try to match the
      text name of span with what we are looking for 

      c. We then wrap the element in cypress so we can click on the element 

  3. You can also use cy.wait() if you are performing heavy actions that require
     extra time to complete which could be necessary with input suggestions 

    e.g  
    cy.wait(3000);

      a. waits 3000 miliseconds or 3 seconds 