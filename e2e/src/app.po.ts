import { browser, by, element } from 'protractor';

export class AppPage {
  /**
   * Navigate to path
   * @param url url
   */
  navigateTo(url: string = browser.baseUrl): Promise<any> {
    return browser.get(url) as Promise<any>;
  }

  /**
   * Get current url
   */
  getUrl(): Promise<string> {
    return browser.getCurrentUrl() as Promise<string>;
  }

  /**
   * Get text value
   * @param s string DOM element to get
   */
  getText(s: string): Promise<string> {
    return element(by.css(s)).getText() as Promise<string>;
  }

  /**
   * Click selected button
   * @param s string DOM element to get
   */
  clickButton(s: string): Promise<void> {
    return element(by.css(s)).click() as Promise<void>;
  }

  /**
   * Check url change
   * @param url url path
   */
  waitForUrlToChangeTo(url: string): Promise<boolean> {
    const urlIsChangedTo = async () => (await browser.getCurrentUrl()) === url;
    return urlIsChangedTo() as Promise<boolean>;
  }
}
