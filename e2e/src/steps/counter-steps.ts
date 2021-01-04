// @ts-ignore
import { Before, Then, When } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from '../app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

When('I click on the increment button {int} times', async (x: number) => {
  for (let index = 0; index < x; index++) {
    await page.clickButton('#increment');
  }
});

Then('The counter should show, {string}', async (x: string) => {
  const counter = page.getText('#counter');
  expect(await counter).to.equal(x);
});

When('I click on the decrement button {int} times', async (x: number) => {
  for (let index = 0; index < x; index++) {
    await page.clickButton('#decrement');
  }
});

Then('The counter should show. {string}', async (x: string) => {
  const counter = page.getText('#counter');
  expect(await counter).to.equal(x);
});

When('I click on the reset button', async () => {
  await page.clickButton('#reset');
});

Then('The counter should show; {string}', async (x: string) => {
  const counter = page.getText('#counter');
  expect(await counter).to.equal(x);
});
