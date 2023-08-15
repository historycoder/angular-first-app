import { browser, element, by, logging } from 'protractor';

describe('first-app-lesson-00 app', () => {

  beforeEach(() => browser.get(''));

  it('should display correct alt img', async () => {
    expect(await element.all(by.css('img')).get(0).getAttribute('alt')).toEqual('logo');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
