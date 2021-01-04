// @ts-ignore
import { Before, Given, Then, When } from 'cucumber';
import { AppPage } from '../app.po';
import { browser } from 'protractor';
import { expect } from 'chai';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given('I am on the {string} page', async (x: string) => {
  await page.navigateTo(browser.baseUrl);
});

When('I click the {string} button', async (url: string) => {
  await page.waitForUrlToChangeTo(browser.baseUrl + url);
  await page.clickButton('#counter');
});

Then('I go to the {string} page', async (url: string) => {
  expect(await page.waitForUrlToChangeTo(browser.baseUrl + url));
});
