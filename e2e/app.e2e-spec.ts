import { LoanPrequalificationUIPage } from './app.po';

describe('loan-prequalification-ui App', () => {
  let page: LoanPrequalificationUIPage;

  beforeEach(() => {
    page = new LoanPrequalificationUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
