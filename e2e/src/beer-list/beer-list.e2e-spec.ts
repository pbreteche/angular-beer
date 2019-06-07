import { BeerListPage } from './beer-list.po';
import { browser, logging } from 'protractor';

describe('Beer list page', () => {
  let page: BeerListPage;

  beforeEach(() => {
    page = new BeerListPage();
  });

  it('should display 4 beers', () => {
    page.navigateTo();
    expect(page.getBeersCount()).toEqual(4);
  });

  it('should navigate to beer detail', () => {
    page.getOroshiLink().click();
    expect(page.getTitleText()).toContain('Oroshi');
    expect(page.getDefinitionData(1)).toContain('FR');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
