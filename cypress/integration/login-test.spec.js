import { LoginPage } from '../support/pages/LoginPage';
import { DashboardPage } from '../support/pages/DashboardPage';
import { NewActivationPage } from '../support/pages/NewActivationPage';
import { MvpPickerData } from '../data/MvpPickerData';
import { NewMvpPage } from '../support/pages/NewMvpPage';

var username = Cypress.env('USERNAME');
var password = Cypress.env('PASSWORD');
var loginPage = new LoginPage();
var dashboardPage = new DashboardPage();
var newMvpPage = new NewMvpPage();
var newActivationPage = new NewActivationPage();
var mvpPickerData = new MvpPickerData();


describe('Login', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.server();
        cy.route({ method: "POST", url : "**/v1/staging/login"}).as('login');
        cy.route({ method: "POST", url: '**/v1/staging/upload/notifyuploadedfile' }).as('uploadSuccess');
        cy.route({ method: "GET", url : "**/locale/getAllLocales"}).as('loadLocale');
        cy.route({ method: "GET", url : "**//competition/options/mvp"}).as('getMvp');
        cy.route({method: "POST", url : "**/v1/staging/competition"}).as('submitCompetition');
        cy.route({method: "PUT", url : "**/competition/**/notify"}).as('notify');
        cy.route({method: "POST", url : "**/competition/createMediaFile"}).as('createMedia');
        cy.route({method: "GET", url : "**/competitions",failOnStatusCode: true }).as('getCompetitions');    
      }
    );

    it('perform login and check dashboard', () => {
        loginPage.verifyElements();
        loginPage.performLogin(username, password); 
        cy.wait('@getCompetitions', { timeout: 30000 }).its('status').should('eq', 200);
    });


    it('create the MVP Campaign ', () => {
        loginPage.verifyElements();
        loginPage.performLogin(username, password);
        dashboardPage.verifyElements();
        dashboardPage.gotoCreateActivation();
        newActivationPage.createCampaign('MVP Picker');
        newMvpPage.verifyElements();
        newMvpPage.typeActivationName(mvpPickerData.activationName);
        newMvpPage.typeActivationTitle(mvpPickerData.activationTitle);
        newMvpPage.typeActivationDesc(mvpPickerData.activationDesc);
        newMvpPage.selectButtonColor(mvpPickerData.buttonColorCode);
        newMvpPage.selectButtonTextColor(mvpPickerData.buttonTextColorCode);
        newMvpPage.selectFontColor(mvpPickerData.fontColorCode);
        newMvpPage.enterStartDate(mvpPickerData.startDate);
        newMvpPage.enterStartTime(mvpPickerData.startTimeHr, mvpPickerData.startTimeMin);
        newMvpPage.enterEndDate(mvpPickerData.endDate);
        newMvpPage.enterEndTime(mvpPickerData.endTimeHr, mvpPickerData.endTimeMin);
        newMvpPage.uploadImage(newMvpPage.desktopImgInput, 'images/sachin.jpg');
        newMvpPage.uploadImage(newMvpPage.tabletImgInput, 'images/sachin.jpg');
        newMvpPage.typeGridName(mvpPickerData.gridName);
        newMvpPage.clickAddGrid();
        newMvpPage.selectTeam(mvpPickerData.teamName);
        newMvpPage.selectPlayer(mvpPickerData.playerName);
        //newMvpPage.submitActivation();
    });


});

