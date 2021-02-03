import { SideMenu } from './SideMenu.js';

export class NewActivationPage {
  constructor() {
    this.campaignSelection = "//div[@class='activationType']/div[contains(text(),'Campaign')]/../div/button";
    this.sideMenu = new SideMenu();
  }

  verifyElements() {
    this.sideMenu.verifyElements();
  }

  createCampaign(campaignName)
  {
    var campaignButton = this.campaignSelection.replace('Campaign',campaignName);
    console.log("Campaign : " + campaignButton);
    cy.xpath(campaignButton).should('be.enabled');
    cy.xpath(campaignButton).click();  
  }
}