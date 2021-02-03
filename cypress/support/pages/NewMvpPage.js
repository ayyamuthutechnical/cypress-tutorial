import { SideMenu } from './SideMenu.js';

export class NewMvpPage {
  constructor() {
    this.activationButton = "div.toggle-switch";
    this.sideMenu = new SideMenu();
    //Activation Description
    this.activationNameTextField = 'input#compName';
    this.manageCssButton = "//button[contains(text(),'Manage CSS')]";
    this.activationTitleTextField = 'input#compDetail';
    this.activationDescTextField = 'textarea#compDesc';
    //Activation Creative
    this.selectLocale = "[ng-model='ccc.localeId']";
    this.fontColorInput = "//label[contains(text(),'Font colour')]/../color-picker//input";
    this.fontColorSpan = "//label[contains(text(),'Font colour')]/../color-picker//span";
    this.buttonTextColorInput = "//label[contains(text(),'Button Text colour')]/../color-picker//input";
    this.buttonTextColorSpan = "//label[contains(text(),'Button Text colour')]/../color-picker//span";
    this.buttonColorInput = "//label[contains(text(),'Button colour')]/../color-picker//input";
    this.buttonColorSpan = "//label[contains(text(),'Button colour')]/../color-picker//span ";
    this.fromDateInput = "#dateFrom";
    this.fromTimeHrsInput = "[ng-model='ccc.startTime'] * input[ng-model='hours']";
    this.fromTimeMinInput = "[ng-model='ccc.startTime'] * input[ng-model='minutes']";
    this.fromMeridianButton = "[ng-model='ccc.startTime'] * button";
    this.endDateInput = "[ng-model='ccc.dateEnd']";
    this.endTimeHrsInput = "[ng-model='ccc.endTime'] * input[ng-model='hours']";
    this.endTimeMinInput = "[ng-model='ccc.endTime'] * input[ng-model='minutes']";
    this.endMeridianButton = "[ng-model='ccc.endTime'] * button";
    this.logoImgInput = "input#logoBg";
    this.sponsorImgInput = "input#sponsorsBg";
    this.sponsorLinkInput = "#sponsorsLink";
    this.desktopImgInput = "input#desktopBg";
    this.enableDesktopBgButton = "#enableDesktopBg";
    this.tabletImgInput = "input#tabletBg";
    this.enableTabletBgButton = "#enableTabletBg";
    this.mobileImgInput = "input#mobileBg";
    this.enableMobileBgButton = "#enableMobileBg";
    this.enterCopyTextField = "input#enterCopy";
    this.voteCopyTextField = "input#voteCopy";
    this.submitCopyTextField = "input#submitCopy";
    this.addGridButton = "//button[contains(text(),'Add grid')]";
    this.questionTextField = "input#question.ng-empty";
    this.teamCheckbox = "//div[contains(text(),'teamName')]/../div/input";
    this.playerCheckbox = "//div[contains(text(),'playerName')]/../../div/input";
    this.enableCompetitionButton = "#enableCompetition";
    this.thanksTextArea = "#thanksCopy";
    this.addMarketBtnButton = "[ng-click='ccc.addMarketingButton()']";
    this.socialSharingButton = "input#socialSharingOptions";
    this.voteDataVizButton = "input#isVoteDataVisualizationEnabled";
    this.widgetTrackTextArea = "textarea.embedCode.ng-binding:not(.short)";
    this.headerTrackTextArea = "textarea.embedCode.ng-binding.short";
    this.trackEventNameTextField = "#trackingEventName";
    this.submitButton = "[type='submit']";
  }

  verifyElements() {
    cy.wait('@loadLocale', { timeout: this.sideMenu.PAGE_TIMEOUT }).its('status').should('eq', 200);
    cy.wait('@getMvp', { timeout: this.sideMenu.PAGE_TIMEOUT }).its('status').should('eq', 200);
    cy.get(this.activationButton, { timeout: this.sideMenu.PAGE_TIMEOUT }).should('be.visible');
    this.sideMenu.verifyElements();
  }

  enableActivation() {
    cy.get(this.activationButton).click();
  }

  typeActivationName(activationName) {
    cy.get(this.activationNameTextField).type(activationName);
  }

  typeActivationDesc(activationDesc) {
    cy.get(this.activationDescTextField).type(activationDesc);
  }

  typeActivationTitle(activationTitle) {
    cy.get(this.activationTitleTextField).type(activationTitle);
  }

  selectLanguage(langName) {
    cy.get(this.selectLocale).select(langName);
  }

  selectFontColor(colorCode) {
    cy.xpath(this.fontColorInput).clear().type(colorCode).type('{esc}');
  }

  selectButtonTextColor(colorCode) {
    cy.xpath(this.buttonTextColorInput).clear().type(colorCode).type('{esc}');
  }

  selectButtonColor(colorCode) {
    cy.xpath(this.buttonColorInput).clear().type(colorCode).type('{esc}');
  }

  enterStartTime(hr, min) {
    cy.get(this.fromTimeHrsInput).clear().type(hr);
    cy.get(this.fromTimeMinInput).clear().type(min);
  }

  enterStartDate(startDate) {
    cy.get(this.fromDateInput).clear({ force: true }).type(startDate,{force: true}).type('{esc}');
  }

  enterEndDate(endDate) {
    cy.get(this.endDateInput).clear({ force: true }).type(endDate, { force: true }).type('{esc}');

  }

  enterEndTime(hr, min) {
    cy.get(this.endTimeHrsInput).clear().type(hr);
    cy.get(this.endTimeMinInput).clear().type(min);
  }

  uploadImage(fileInput, filePath) {
    cy.get(fileInput).attachFile(filePath);
    cy.wait('@uploadSuccess', { timeout: this.sideMenu.PAGE_TIMEOUT }).its('status').should('eq', 200);
  }

  typeEnterButtonName(enterButtonText) {
    cy.get(this.enterCopyTextField).type(enterButtonText);
  }

  typeVoteButtonName(voteButtonText) {
    cy.get(this.voteCopyTextField).type(voteButtonText);
  }
  typeSubmitButtonName(submitButtonText) {
    cy.get(this.submitCopyTextField).type(submitButtonText);
  }

  typeGridName(gridName) {
    cy.get(this.questionTextField).type(gridName);
  }

  clickAddGrid() {
    cy.xpath(this.addGridButton).click();
  }

  selectTeam(teamName) {
    var teamNameCheck = this.teamCheckbox.replace("teamName", teamName);
    cy.xpath(teamNameCheck).check();
  }

  selectPlayer(playerName) {
    var playerNameCheck = this.playerCheckbox.replace("playerName", playerName);
    cy.xpath(playerNameCheck).check();
  }

  typeConfirmationInfo(confirmationText) {
    cy.get(this.thanksTextArea).type(confirmationText);
  }

  submitActivation() {
    cy.get(this.submitButton).should("be.enabled");
    cy.get(this.submitButton).click();
    cy.wait('@submitCompetition', { timeout: this.sideMenu.PAGE_TIMEOUT }).its('status').should('eq', 200);
    cy.wait('@notify', { timeout: this.sideMenu.PAGE_TIMEOUT }).its('status').should('eq', 200);
    cy.wait('@createMedia', { timeout: this.sideMenu.PAGE_TIMEOUT }).its('status').should('eq', 200);
  }
}