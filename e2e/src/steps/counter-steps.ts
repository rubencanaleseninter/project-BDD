// @ts-ignore
import { Before, Then, When } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from '../app.po';
import { by, element } from 'protractor';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

When('I click on the increment button {string} times', async (x: number) => {
  for (let index = 0; index < x; index++) {
    await page.clickButton('#increment');
  }
});

Then('The counter should show, {string}', async (x: string) => {
  expect(await element(by.id('counter-value')).getText()).to.equal(x);
});

When('I click on the decrement button {string} times', async (x: number) => {
  for (let index = 0; index < x; index++) {
    await page.clickButton('#decrement');
  }
});

Then('The counter should show. {string}', async (x: string) => {
  const counter = page.getText('#counter-value');
  expect(await counter).to.equal(x);
});

When('I click on the reset button', async () => {
  await page.clickButton('#reset');
});

Then('The counter should show; {string}', async (x: string) => {
  const counter = page.getText('#counter-value');
  expect(await counter).to.equal(x);
});

When('I click on the random button', async () => {
  await page.clickButton('#random');
});

Then('The counter should not show result {string}', async (x: string) => {
  const counter = page.getText('#counter-value');
  expect(await counter).to.not.equal(x);
});
