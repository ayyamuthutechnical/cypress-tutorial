
export class SideMenu {
  PAGE_TIMEOUT = 30000;
  constructor() {
    this.menuButton = "#menu-trigger";
    this.activationsLink = "//a[contains(text(),'Activations')]";
    this.dashboardLink = "//a[contains(text(),'Dashboard')]";
    this.newActivationLink = "//a[contains(text(),'New Activation')]";
    this.reportsLink = "//a[contains(text(),'Reports')]";
    this.reportListLink = "a.active";
    this.asstMgmtLink = "//a[contains(text(),'Asset Management')]";
    this.singlePlayerUplLink = "//a[contains(text(),'Single Player Upload')]";
    this.batchUplLink = "//a[contains(text(),'Batch Upload')]";
    this.addTeamsLink = "//a[contains(text(),'Add Teams')]";
    this.addYoutubeLink = "//a[contains(text(),'Add YouTube Video')]";
    this.fontMgmtLink = "//a[contains(text(),'Font Management')]";
    this.photoWallModLink = "//a[contains(text(),'Photo Wall Moderation')]";
    this.orgLink = "//a[contains(text(),'Organisation')]";
    this.usersListLink = "//a[contains(text(),'Users List')]";
    this.usersAddLink = "//a[contains(text(),'Users Add')]";
    this.customersLink = "//li[contains(@class,'sub-menu')]/a[contains(text(),'Customers')]";
    this.custListLink = "//a[contains(text(),'Customers List')]";
    this.custAddLink = "//a[contains(text(),'Customers Add')]";
    this.integrationLink = "//a[contains(text(),'Integrations')]";
    this.webHooksLink = "//a[contains(text(),'Webhooks')]";
    this.supportLink = "//a[contains(text(),'Support')]";
    this.logOutLink = "//a[contains(text(),'Logout')]";
  }

  verifyElements() {
    cy.get(this.menuButton).click();
    cy.xpath(this.activationsLink).should('be.visible');
    cy.xpath(this.reportsLink).should('be.visible');
    cy.xpath(this.asstMgmtLink).should('be.visible');
    cy.xpath(this.customersLink).should('be.visible');
    cy.xpath(this.orgLink).should('be.visible');
    cy.xpath(this.integrationLink).should('be.visible');
    cy.xpath(this.supportLink).should('be.visible');
    cy.xpath(this.logOutLink).should('be.visible');
    cy.get(this.menuButton).click();
  }

  gotoDashboard() {
    cy.xpath(this.activationsLink).click();
    cy.xpath(this.dashboardLink).should('be.visible').click();
  }

  gotoNewActivation() {
    cy.xpath(this.activationsLink).click();
    cy.xpath(this.newActivationLink).click();
  }
}