import { SideMenu } from './SideMenu.js';

export class DashboardPage {
  constructor() {
    this.createActivation = 'span.main-action';
    this.tableEntry = 'a.ng-binding';
    this.sideMenu = new SideMenu();
  }

  verifyElements() {
    cy.get(this.createActivation,{timeout : this.sideMenu.PAGE_TIMEOUT}).should("exist");
    this.sideMenu.verifyElements();
  }

  gotoCreateActivation()
  {
    cy.get(this.createActivation).click();

  }

}