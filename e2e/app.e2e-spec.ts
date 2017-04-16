import { GithubclientclonePage } from './app.po';

describe('githubclientclone App', () => {
  let page: GithubclientclonePage;

  beforeEach(() => {
    page = new GithubclientclonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
