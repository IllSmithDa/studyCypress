# Cypress is a web automation testing tool

  1. Can test any application on the browser

  2. doesn't use Selenium and is open source 

  3. Testruner is free but dashboard is paid

    a. test runner is open source and locally installed

    b. testrunner and dashboard makes up the Cypress ecosystem

  4. Used for automating end-to-end test cases, integration tests, unit test cases, and api
     testing 

  5. Cypress is JavaScript/TypeScript based 

  6. Cypress runs in the browser making faster than Selenium which executes
     outside of browser

# Features 

  1. time travel - Cypress will take snapshot of every run and maintain history
     allowing you to freely traverse the different steps 

  2. Provides debugging and has access to all the dev tools

  3. Automatic waits (built in waits) - default waiting time for everything
     including element loading, data loading, component loading etc

  4. very consistent in terms of results even in different browsers

  5. screenshots and videos captures for test cases 

  6. cross browser testing (multiple browsers) - locally or remotely through
     jenkins

# Limitations

  1. Can't automate window applicatiosn or mobile applications

  2. Limited support for browsers

  3. Only support JavaScript/TypeScript

  4. Tough to read/writing into files is difficult

  5. limited integrations of third party reporting tools 

# Install Cypress and startup

  1. npm i --save -dev cypress

  2. use command 'npx cypress open'

# Cypres Configuration

  1. Automatic configuration when you select component or e2e testing

  2. create your own specification files under e2e folder called test.cy.js

# Cypres Syntax

  1. start with a decribe function and takes a string which descrbies the test
     suite followed by a function which we will write our tests 

    e.g 
    describe('landing page', () => {
    })

  2. Then you have to define the individual tests using function it()

    e.g
    describe('landing page', () => {
      it('displays the top nav', () => {

      })
    })
  
  3. use expect() to define and compare and see if something is there or if a
     condition is true or whatever. 
    
    e.g
    describe('landing page', () => {
      it('displays the top nav', () => {
        expect(true).to.equal(true)
      })
    })

      a. Write a series of them to describe as series of steps of tests

