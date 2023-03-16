# Assertions - Two types 

  1. https://docs.cypress.io/guides/references/assertions

  2. Implicit assertions which uses key phrases 'should' and 'and'

  3. explicit assertion which uses key phrases using 'expect' and 'assert'

# Implicit Assertiosn with using 'should' and 'and'

  1. After launching application using cy.visit(), one assertion you can run is
     to check the url using implicit assertions using 'should' and cy.url()
     which returns your current url

    e.g
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.url().should('include', 'orangehrmlive.com')
    
     a. should in this exmaple uses 'include' and check to see if the second
     argument can be found in the url that is returned

  2. 'eq' in assertion langauge is equivalent to '=' or 'equal'

    e.g 
    cy.url().should('eq', https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

      a. checks if url returned is an exact match to the one we passed as second argument

  3. 'contian' allows us to specify text to see if text is part of the url.
     WOrks similarly to 'include'

    e.g
    cy.url().should('contain', 'orangehrmlive');

  
  4. Good practice to is to chain the should methods together so we don't have
     to capture the url every time we make an assertion. Not applicable for
     every aspect but lookout when you call a function multiple times that return
     same value using 'and' keyword

    e.g
    cy.url().should('include', 'orangehrmlive.com')
     .and('contain', 'orangehrmlive')
     .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     
     a. 'and' is the keyword that allows us to chain multiple should together

  5. cy.title() will return title of your application

    e.g
    cy.title().should('eq', 'Theologian's Pen')

# Uinsg 'exist' and 'be.visible'

  1. You can retrieve an element directly using the cypress application by going
     to the top of the test browser on the left hand side next to the url, you
     can use it to select elements and retrieve them by copying the path to the
     element using the copy to clipboard button on the right hand side of the
     url bar

    e.g
    cy.get('#main-logo').should('be.visible');

      a.we test to see if the element with id 'main-logo' is visible

    e.g
    cy.get('#main-logo').should('exist');

      a. Checks if the element with id 'main-logo' exists

# 'have.value'

  1. You can check the value of an input using 'have.value'

    e.g
    cy.get('#email').type('jon@doe.com')
    cy.get('#email').should('have.value', 'jon@doe.com')

      a. remember type will type into the input the value you added as the argument and the 'have.value' check to see if the value input matches the input that was typed

# Negative Assertions using 'not'

  1. Negative assertions are also part of the assertion library using 'not' in
     front of other key phrases like 'contain'

     e.g
     cy.url().should('not.contain', 'ketchup')

      a. 'ketchup' should not be part of the url

# Using expaths to check link count 

  1. You can test the length of number of items of webpage

    e.g
    cy.xpath("//a").should("have.length", "5");

      a. number of links should equal to 5


# Explicit Assertions using 'expect' and assert'

  1. 'expect' is used from a behavorial driven development persepective 

  2. 'assert' is used in test driven development 


# 'expect' approach

  1. THey are not built in assertions so we need to use javascript functions
     using async function that will retrieve and capture an element and perform
     some kind of assertion with that element in the async function

  2. use 'expect' function and create a assertion its 'to.equal' method to
     compare if our expected value matches the returned value

    e.g 
    let expectedText = "Home"
    cy.get('[data-testid="logged-nav-home"] > .chakra-link > .chakra-text')
      .then((ele) => {
        let elementText = ele.text();
        expect(elementText).to.equal(expectedText);
        expect(elementText).to.not.equal('Test');
      })

      a. Test if the text of the button is equal to 'Home' not to 'Text'

# 'assert' approach or TDD assertions 

  1. TDD style is similar to BDD style but syntax is obviously going to be
     different 

    e.g
    assert.equal(elementText, expectedText)
    assert.notEqual(elementText, 'Test')

      a. Doing the same thing as the previous example but using TDD syntax

# BeforeEach 

  1. We can trigger certain actions to occur before we get to our assertions
     using beforeEach()

    e.g
    beforeEach("visit page", () => {
      cy.visit("http://localhost:5173/");
    });

      a. This will ensure that before every new set of tests in 'it()', we will make sure we visit the apge first

# Child Elements

  1. We can use the ">" symbol followed by tagname to get child tag

    e.g
    cy.get("ul#my-list>li")

      a. This retrieves all the child 'li' under the 'ul' with 'id' with 'my-list'

      b. this will retreive all 'li' not just one if there is more than one 

    e.g
    cy.get("table[aria-label='product-table']>tbody>tr").should('have.length', '30')

      a. retrieves the tr which should have number of rows which is 30 in this case

  2. We can use a semi-colon to indicate a particular child as demonstrated below

    e.g
    cy.get("ul#my-list>li:first-child")

      a. retrieves the first 'li' instead of all of them as in the previous example

    e.g
    cy.get("ul#my-list>li:nth-child(5)")

      a. retrieving the 5th li

  3. Using .each(), we can iterate through each row and use it to test

    e.g
    cy.get("table[aria-label='product-table']>tbody>tr")
      .each(($row, index, $rows) => {
        // wrapping each row and getting each 'td' and getting one column using 'td'
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text())
          })
        })  
      })
    })