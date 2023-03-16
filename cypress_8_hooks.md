# Cypress Hooks

  1. Cypress has 4 different types of hooks: before, after, beforeEach,
     afterEach

# before and after

  1. 'before' runs just once before you run all the tests and 'after' runs once after all
     the test are done. 
     
  2. Note that if you use before to login, it will only be
     sustained for first 'it' block so you can't use it to login once and run
     multiple it block without relogging in between each it block. 

  3. Use beforeEach and afterEach to set the login and logout so test can run
     successfully between each 'it' block'

# afterEach and BeforeEach

  1. executes after every test or 'it' block 

# Tags

  1. tags can be used if you need to run particular 'it' blocks or skip other
     ones 

    e.g
    it.skip('test block ', () => {})
    it.only('test block ', () => {})

      a. skip - skips this 'it' block

      b. only - makes it the only 'it' block that will run on executtion