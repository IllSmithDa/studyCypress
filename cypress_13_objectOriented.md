# Object Oriented Cypress Classes

  1. You can follow an object oriented model for writing tests

  2. This includes creating classes with all the associated methods with various
     actions required

  3. The idea is to create reuable groups of tests that we can utilize for
     multpile cypress files 

  4. you can perform actions and establish variables for element selection but
     you don't do your actual validation or queries on the classes but set
     eveything up to do those validation through classes

    e.g
    export default class Login {
      loginUrl = "https://theologianspen.com/login";
      emailInput = '#email';
      passwordInput = '#password';
      submitButton = 'form > .chakra-button';
      myEmail = Cypress.env("email");
      myPW = Cypress.env("password");
      homeLink = "div[data-testid='logged-nav-home']>a";

      goToLogin = () => {
        cy.visit(this.loginUrl);
      }

      setEmail = () => {
        cy.get(this.emailInput).type(this.myEmail);
      }

      setPassword = () => {
        cy.get(this.passwordInput).type(this.myPW);
      }

      submit = () => {
        cy.get(this.submitButton).click();
      }

      verifyLogin = () => {
        cy.get(this.homeLink).should("have.text", "Home");
      }
  
    }

      a. We created a class for logging in with both in class variables as well as the login methods which is the entire process of logging in including login vertification