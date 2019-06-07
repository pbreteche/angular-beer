import { browser, by, element } from 'protractor';

export class BeerListPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/beer-list') as Promise<any>;
  }

  getBeersCount() {
    return element.all(by.css('app-beer-list li')).count() as Promise<number> ;
  }

  getOroshiLink() {
    return element(by.linkText('Oroshi'));
  }

  getTitleText() {
    return element(by.css('app-beer-detail h1')).getText() as Promise<string>;
  }

  getDefinitionData(position: number) {
    return element(by.css(`app-beer-detail dd:nth-of-type(${position})`)).getText();
  }
}
