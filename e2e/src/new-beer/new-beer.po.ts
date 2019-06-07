import { browser, by, element } from 'protractor';

export class NewBeerPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/new-beer') as Promise<any>;
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  getUsernameTextbox() {
    return element(by.id('login.username'));
  }

  getPasswordTextbox() {
    return element(by.id('login.password'));
  }

  logIn() {
    return element(by.buttonText('Se connecter')).click();
  }
}
