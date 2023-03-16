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

# Authenticated alert

  1. Cypress has built in method for testing cypress alert box authentication

    e.g
    cy.visit("some-url.com", {auth: { username: 'w/e', password: 'w/e '}});

# Handling Anchor tags with target="_blank"

  1. You will need to remove the target="_blank" property so that you can test
     the new tab page

    e.g
    cy.visit("some-url.com");
    cy.get("#some-id-a-tag").invoke("removeAttr", "target").click();

      a. invoke() wil invoke some action that you define as its first argument. removeAttr will remove one attribute which in the case is target. This will cause the click() to work as normal and allow user to test the interactiosn afterwards without breaking cypress. 

      b. cy.url().should('include', 'new-url.com') can be used to test the new url to make sure you have successfully are now in the desired url

  2. Second method is to obtain the href attribute which contains the url and
     use cy.visit() to directly visit the url 

    e.g
    cy.visit("Some-url.com")
    cy.get("#some-id-a-tag").then((ele) => {
      const newUrl = ele.prop('href')
      cy.visit(newUrl);
    })

      a. Get the 'href' value from the anchor tag and use cy.visit() to directly visit the link

# Iframe Retrieval

  1. Retrieving elements of another document or iframe requires some unique
     syntax
  
  2. retrieve the iframe itself first and then the document itself 

    e.g
    cy.get("#inlineFrameExample")
      .its('0.contentDocument.body')
      .should('be.visible')
    
# Iterating pagination 

  1. You can test pagination by using a for loop to continually test to see if
     an element exists

    e.g
    let totalPages = 5;
    for (let p=1; p < totalPages; p++) {
      if (totalPage> 1) {
        cy.get("nav[aria-label='pagination navigation']>ul>li:nth-child("+p+")").click();
        // check something else on each new page
      }
    }