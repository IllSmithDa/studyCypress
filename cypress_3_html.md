# Two ways to locate and identify elements and they known as locators

  1. CSS locator

  2. xpath - requires additional plugin

  3. cy.get() is provided function for locating elements and we pass a Locator
     as an argument to define where we are locating

  4. In command.js file in support folder we can globally import cypress using
     this html 


# CSS Selector

  1. First in built methdo for finding elements 

  2. You can use combinations of css classes and ids to find your element. You
     can also include tag as an extra optional specifier

     e.g
     tag and id (tag is optional)
     tag and class (tag is optional)
     tag and attribute (tag is optional)
     tag and class and attribute (tag is optional);

  3. specify using '#' for id '.' for class '[some_attribute = some_value]' and name of
     tag in the front of the query

    e.g 
    input[name="searcch_query"]

      a. looks for an input tag with attribute 'name' set to 'search_query'
    
    input.search_query[name="searcch_query"];

      a. same as previous example but we added a class 'search_query' to further specify the query

  4. Use the query as the argument for cy.get()

    e.g 
    cy.get("button#contact_us")

      a. finds a button with id 'contact us' 

  5. Now that you selected a element, you can perform some kind of action on it
     such as type or click 

    e.g 
    cy.get("button#contact_us").click();

      a. clicks on the button with id 'contact-us'

    cy.get("input.my_input").type("balloons")

      a. selects the input with class my_input and types 'balloons' for the input

  6. Add an assertion which is a statement that tests whether a something is
     there or not 

     e.g
     cy.get('textarea[name="contactMessage"').should('exist')

      a. checks for the existence of a input field that we don't want t fill out
      be we want to make sure it is there

# Cypress Xpath 

  1. As written earlier, you need a package called cypress-xpath to use xpath. You can search in the extensions section of Cypress

    e.g
    npm install -D @cypress/xpath

  2. after installing, you can set it to run globally by going to command.js and
     setting an export as written below
  
    e.g
    require('@cypress/xpath');

  3. You can find lists with multiple elements and check the length 

    e.g
   cy.xpath("//div[@id='animated-features']/div").should('have.length', 4)

      a. Find 'div' tag with id 'animated-features' and has 4 child div tags 

  3. You can chain xpaths together if neccesary to make complex queries

    e.g
    cy.xpath("//div[@id='animated-features']").xpath("./div").should('have.length', 4)

      a. It does the same thing as the first example but chains multiple xpaths together 
    
# Setup Environment vairables 

  1. Create a file in the root directory called cypress.env.json

  2. use Ojbect with string keys to define need variables 

    e.g 
    {
      "email": "jon@doe.com",
      "password":"dummy_password123"
    }

  3. use Cypress.env() to retrieve and consume the env variables with key string
     as the argument

     e.g
     Cypress.env("email")

      a. retrieves the env var for email which in this case is "jon@doe.com"

      b. Note that you don't need to export or import anything as Cypress
      handles that on its end 

  4. Create a .gitignore file to ensure that your env file doesn't get pushed to
     github. Remind other users to create their own cypress.env.json files to
     ensure their cypress app works if they decide to clone the app from your
     github
     
  5. include the cypress.env.json in your config in your gitignore as well as
     your node_modules 
     https://www.freecodecamp.org/news/gitignore-file-how-to-ignore-files-and-folders-in-git/

    e.g


  