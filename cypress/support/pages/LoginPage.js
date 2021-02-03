export class LoginPage {
  constructor() {
    this.userNameTextField = '[ng-model=username]';
    this.passwordTextField = '[ng-model=password]';
    this.loginButton = '[ng-disabled=performingLogin]';
  }

  verifyElements() {
    cy.get(this.userNameTextField).should('be.visible');
    cy.get(this.passwordTextField).should('be.visible');
    cy.get(this.loginButton).should('be.visible');
  }
  performLogin(userName, password) {
    cy.get(this.userNameTextField).type(userName);
    cy.get(this.passwordTextField).type(password);
    cy.get(this.loginButton).click();
    cy.wait('@login', { timeout: 30000 }).its('status').should('eq', 200);
  }

}