import { ReceiptBookPage } from './app.po';

describe('receipt-book App', function() {
  let page: ReceiptBookPage;

  beforeEach(() => {
    page = new ReceiptBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
