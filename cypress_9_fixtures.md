# Fixtures 

  1. You can access json data in your fixtures folder directly when writing test
     in you 'it' block

    e.g
    Inside sample-data.json which will reside in fixtures folder
    {
      "username": "Admin",
      "password": "admin123",
    }
    
    Inside test file
    cy.fixture("sample-data").then((data) => {
      cy.get("#input-id-username").type(data.username);
      cy.get("#input-id-password").type(data.password);
      cy.get("#submit-button").click();
    })

      a. we grab sample-data file from fixtures, grab the data and use it to fill out the input fields

  2. We can reuse json data for each 'it' block using 'before' block'

    e.g
    before(() => {
      cy.fixture("sample-data").then((data) => {
        userdata = data
      })
    })

      a. userdata captures the data json and you can use 'userdata' globally for any 'it' block

    it("login app", () => {
      cy.visit("some-website.com/login")
      cy.get("#input-id-username").type(userdata.username);
      cy.get("#input-id-password").type(userdata.password);
    })

      b. You have access to userdata globally on any 'it' block such as this one which logs into the app

# Handling Multiple Data sets
  
  1. Cypress can handle multiple data sets or json passed in as any array 

    e.g
    [
      {
        "username": "Admin",
        "password": "admin123",
      },
      {
        "username": "Admin1",
        "password": "admin124",
      },
      {
        "username": "Admin2",
        "password": "admin125",
      }
    ]

  2. You can capture this kind of data sets

    e.g
    it("data driven event", () => {
      cy.fixture("sample-data").then((data) => {
        data.forEach((eachUser) => {
          cy.visit("some-website.com/login")
          if (eachUser.username==="Admin2" && eachUser.password==="admin125") {
            cy.get("#input-id-username").type(eachUser.username);
            cy.get("#input-id-password").type(eachUser.password);
          } else {
            cy.log("not a match")
          }
        })
      })
    })

      a. data becomes an array of object which you iterate through and perform the same action on each data item

      b. this test each item's password and username until it finds a match which will cause the inputs to be filled out 

      c. otherwise we log 'not a match'

      d. You can write many different tests such as shoud("exist") or should("have.text") or contains()

