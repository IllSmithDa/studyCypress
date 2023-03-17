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