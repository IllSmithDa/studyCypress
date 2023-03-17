export default class Logout {

  profileButton = 'button[aria-haspopup="menu"]';
  adminLogoutBtn = '[data-index="10"]';

  goHome = () => {
    cy.clickLink("Home");
  }
  clickProfile = () => {
    cy.get(this.profileButton).click();
  }
  clickLogout = () => {
    cy.get(this.adminLogoutBtn).click();
  }
}