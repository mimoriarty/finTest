import { FinTestPage } from './app.po';

describe('fin-test App', function() {
  let page: FinTestPage;

  beforeEach(() => {
    page = new FinTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
