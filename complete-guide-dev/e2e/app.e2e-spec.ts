import { CompleteGuideDevPage } from './app.po';

describe('complete-guide-dev App', function() {
  let page: CompleteGuideDevPage;

  beforeEach(() => {
    page = new CompleteGuideDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
