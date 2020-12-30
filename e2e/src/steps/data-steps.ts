// @ts-ignore
import { Then, When, And } from 'cucumber';
import { element, by } from 'protractor';
import { expect } from 'chai';

When('I click on the increment button {int} times', async (x: number) => {
  const incrementButton = element(by.id('increment'));
  for (let index = 0; index < x; index++) {
    await incrementButton.click();
  }
});

Then('The counter should show {string}', async (x: string) => {
  expect(await element(by.id('counter')).getText()).to.equal(x);
});

When('I click on the decrement button {int} times', async (x: number) => {
  const incrementButton = element(by.id('decrement'));
  for (let index = 0; index < x; index++) {
    await incrementButton.click();
  }
});

Then('The counter should shows {string}', async (x: string) => {
  expect(await element(by.id('counter')).getText()).to.equal(x);
});
