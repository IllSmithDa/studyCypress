/// <reference types="Cypress" />

import Login from "../pageObjects/Login"
import Logout from "../pageObjects/Logout";

describe("testing  Login through object ", () => {
  it("basic login", () => {
    const login = new Login();
    login.goToLogin();
    login.setEmail();
    login.setPassword();
    login.submit();
    login.verifyLogin();
    cy.wait(3000);
  })
  afterEach("logout the app if admin", () => {
    // custom command clickLink();
    const logout = new Logout();
    logout.goHome();
    logout.clickProfile();
    logout.clickLogout();
  })
})