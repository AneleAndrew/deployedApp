import { DeployedAppPage } from './app.po';

describe('deployed-app App', function() {
  let page: DeployedAppPage;

  beforeEach(() => {
    page = new DeployedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
