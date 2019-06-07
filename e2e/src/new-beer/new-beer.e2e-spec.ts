import { NewBeerPage } from './new-beer.po';
import { browser, logging } from 'protractor';

describe('New beer page', () => {
  let page: NewBeerPage;

  beforeEach(() => {
    page = new NewBeerPage();
  });

  it('should redirect to login page', () => {
    page.navigateTo();
    expect(page.getCurrentUrl()).toContain('login');

    page.getUsernameTextbox().sendKeys('Pierre');
    page.getPasswordTextbox().sendKeys('secret');

    page.logIn();
    expect(page.getCurrentUrl()).toContain('new-beer');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
