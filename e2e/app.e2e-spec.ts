import { Stupid5Page } from './app.po';

describe('stupid5 App', function() {
  let page: Stupid5Page;

  beforeEach(() => {
    page = new Stupid5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
