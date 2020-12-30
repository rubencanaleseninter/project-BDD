// @ts-ignore
import { Before, Given, Then, When } from 'cucumber';
import { AppPage } from '../app.po';
import { element, by, browser } from 'protractor';
import { expect } from 'chai';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

When('I click on the increment button {int} times', async (x: number) => {
  const incrementButton = element(by.id('increment'));
  for (let index = 0; index < x; index++) {
    await incrementButton.click();
  }
});

Then('The counter should show {string}', async (x: string) => {
  expect(await element(by.id('counter')).getText()).to.equal(x);
});
