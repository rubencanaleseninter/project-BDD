import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string = browser.baseUrl): Promise<unknown> {
    return browser.get(url) as Promise<unknown>;
  }

  getUrl(): Promise<unknown> {
    return browser.getCurrentUrl() as Promise<unknown>;
  }

  getText(s: string): Promise<string> {
    return element(by.css(s)).getText() as Promise<string>;
  }

  clickButton(s: string): Promise<unknown> {
    return element(by.css(s)).click() as Promise<unknown>;
  }

  waitForUrlToChangeTo(url: string): Promise<any> {
    const urlIsChangedTo = async () => (await browser.getCurrentUrl()) === url;
    return urlIsChangedTo() as Promise<unknown>;
  }
}
