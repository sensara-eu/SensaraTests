import test, {expect} from "../src/utils/fixtures";
import ENV from "../src/utils/env";
import LoginPage from "../src/pages/login.page";
import { Page } from "@playwright/test";
import data from "../testData/data.json";
import AlarmOverviewPage from "../src/pages/alarmOverview.page";
import ResidentPage from "../src/pages/resident.page";



let page: Page;
let loginPage: LoginPage;
let alarmoverviewPage: AlarmOverviewPage;
let residentPage: ResidentPage;

test.describe('AlarmOverview Page Tests', () => {

    test.beforeAll(async ({ browser }) => {

     page = await browser.newPage();
    loginPage = new LoginPage(page);
    residentPage = new ResidentPage(page);
    alarmoverviewPage = new AlarmOverviewPage(page);
     await page.goto(ENV.BASE_URL);
   });

test.afterAll(async () => {
    await page.close();
  });
  
  test("Validating the login functionality", async() => {
   
    await loginPage.enterUserName(ENV.USERNAME);
    await loginPage.enterPassword(ENV.PASSWORD);
    await loginPage.clickSignInBtn();
    await loginPage.page.waitForLoadState("networkidle", { timeout: 8000 });
    await page.screenshot({ path: 'Page.png', fullPage: true });
});

    test("Validate AlarmOverview page functionalities", async() => {

    await alarmoverviewPage.clickAlarmOverviewLink();
    await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 10000 });
    const actualHeadersInAlarm = await alarmoverviewPage.getAllHeadersTextsInAlarmOverviewPage();
    const expectedHeadersInAlarm = data.expectedHeaderInAlarmOverViewPage;
    expect(actualHeadersInAlarm).toEqual(expectedHeadersInAlarm);
    await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 2000 });
});



test("Validate Toggle button functionality", async()=> {
    await alarmoverviewPage.validateAutomaticRefreshFunctionality();
});

test("validate the pagination functionality", async() => {
    await alarmoverviewPage.validatePaginationFunctionalityForRightStroke();
    await alarmoverviewPage.validatePaginationFunctionalityForLeftStroke();
});

test("validate Alarm Processing functionality", async()=> {
    await alarmoverviewPage.validateAlarmProcessingFunctionality();

});

test("validate arrowupDownFunctionality in AlarmOverview page for Type Column", async () => {

    await alarmoverviewPage.page.waitForLoadState('networkidle');
    const firstCellText = await alarmoverviewPage.getFirstCellTextInAlarmOverView();
     for (let i = 0; i < 3; i++) {
     await alarmoverviewPage.clickArrowUpDownForType();
     await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 5000 });
    }
    const updatedCellText = await alarmoverviewPage.getFirstCellTextInAlarmOverView();
    console.log(`Before: ${firstCellText} | After: ${updatedCellText}`);
});

test("validate Dropdown value in polygon Button for Type column", async()=> {
    await alarmoverviewPage.clickPolygonButtonForType();
    await alarmoverviewPage.validatepolygonFunctionality();
});

test("validate arrowupDownFunctionality in AlarmOverview page for Creation Date Column", async () => {

    await alarmoverviewPage.page.waitForLoadState('networkidle');
    const firstCellText = await alarmoverviewPage.getFirstCellTextForCreationDate();
     for (let i = 0; i < 3; i++) {
     await alarmoverviewPage.clickArrowUpDownForCreationDate();
     await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 5000 });
    }
    const updatedCellText = await alarmoverviewPage.getFirstCellTextForCreationDate();
    console.log(`Before: ${firstCellText} | After: ${updatedCellText}`);
});

test("validate arrowupDownFunctionality in AlarmOverview page for Alarm column", async () => {

    await alarmoverviewPage.page.waitForLoadState('networkidle');
     for (let i = 0; i < 3; i++) {
     await alarmoverviewPage.clickArrowUpDownForAlarm();
     await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 5000 });
    }
});

test("validate Dropdown value in polygon Button for Alarm column", async()=> {
    await alarmoverviewPage.clickPolygonButtonForAlarm();
    await alarmoverviewPage.validatepolygonFunctionality();
});

test("validate arrowupDownFunctionality in AlarmOverview page for Resident Column", async () => {

    await alarmoverviewPage.page.waitForLoadState('networkidle');
    const firstCellText = await alarmoverviewPage.getFirstCellTextForResident();
     for (let i = 0; i < 3; i++) {
     await alarmoverviewPage.clickArrowUpDownForResident();
     await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 5000 });
    }
    const updatedCellText = await alarmoverviewPage.getFirstCellTextForResident();
    console.log(`Before: ${firstCellText} | After: ${updatedCellText}`);
});

test("validate Dropdown value in polygon Button for Resident column", async()=> {
    await alarmoverviewPage.clickPolygonButtonForResident();
    await alarmoverviewPage.validatepolygonFunctionality();
});

test("validate arrowupDownFunctionality in AlarmOverview page for Sector Column", async () => {

    await alarmoverviewPage.page.waitForLoadState('networkidle');
    const firstCellText = await alarmoverviewPage.getFirstCellTextForSectorInAlarmOverviewPage();
     for (let i = 0; i < 3; i++) {
     await alarmoverviewPage.clickArrowUpDownForSectorInAlarmOverviewPage();
     await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 5000 });
    }
    const updatedCellText = await alarmoverviewPage.getFirstCellTextForSectorInAlarmOverviewPage();
    console.log(`Before: ${firstCellText} | After: ${updatedCellText}`);
});

test("validate Dropdown value in polygon Button for Sector column", async()=> {
    await alarmoverviewPage.clickPolygonButtonForSector();
    await alarmoverviewPage.validatepolygonFunctionality();
});

test("validate arrowupDownFunctionality in AlarmOverview page for Processor Column", async () => {

    await alarmoverviewPage.page.waitForLoadState('networkidle');
     for (let i = 0; i < 3; i++) {
     await alarmoverviewPage.clickArrowUpDownForProcessorInAlarmOverviewPage();
     await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 5000 });
    }
});

test("validate Dropdown value in polygon Button for Processor column", async()=> {
    await alarmoverviewPage.clickPolygonButtonForProcessor();
    await alarmoverviewPage.validatepolygonFunctionality();
});

test("Validate columns Dropdown in alarmoverview page", async()=> {
    await alarmoverviewPage.validateColumnsDropdownFunctionalityInAlarmOverviewPage();
    await alarmoverviewPage.page.waitForLoadState("networkidle", { timeout: 10000 });
    await alarmoverviewPage.getAllHeadersTextAfterColumnsSelectionInAlarmOverviewPage();
    const actualHeaders = await alarmoverviewPage.getAllHeadersTextAfterColumnsSelectionInAlarmOverviewPage();
    const expectedHeaders = data.expectedHeadersAfterColumnsOptionsInAlarmOverViewPage;
    expect(actualHeaders).toEqual(expectedHeaders);
    await residentPage.validateResetFiltersFunctionality();
    await residentPage.resetVisibilityFunctionality();
});

test("validate Dropdown value in polygon Button for creation date column", async()=> {
    await alarmoverviewPage.clickPolygonButtonForCreationDate();
    await alarmoverviewPage.validatepolygonFunctionalityForCreationDate();
});







})

