# Cypress functions

  1. Launch our application by commands built in by cypress using cy.visit("") a
     url
  
    e.g
    describe("my first test", () => {
      it('test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
      })
    })
      
      a. Launches this test application

  2. you can check the title of application using 'cy.title()'

    e.g
    cy.title().should('eq', 'OrangeHRM')
  
  3. You can use cypress application or use cypress command to launch these test
     
    a. simply using 'npx cypress run', choose browser and select desired test 

    b. to run test via command prompt 'npx cypress run'. It will run all your tests on the command prompt

  4. to see ui vai browser when running via command prompt: npx cypress run --headed

  5. to specify a specific file to test use 'npx run --spec
     sample-proj\cypress\e2e\test.cy.js' 
  
    a. you can find file path by right clicking on the file and click 'copy relative path'

  6. You can also specify which browser you want to run test via command prompt
     by adding it to end of commmand 

     e.g
     npx run --spec sample-proj\cypress\e2e\test.cy.js firefox --headed

      a. Not only runs on firefox but also opens up browser