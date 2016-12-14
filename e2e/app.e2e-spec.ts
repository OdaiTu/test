import { OdaiAppPage } from './app.po';

describe('odai-app App', function() {
  let page: OdaiAppPage;

  beforeEach(() => {
    page = new OdaiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
