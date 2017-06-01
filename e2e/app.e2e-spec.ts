import { BlogSampleAngularViewChildContentChildPage } from './app.po';

describe('blog-sample-angular-view-child-content-child App', () => {
  let page: BlogSampleAngularViewChildContentChildPage;

  beforeEach(() => {
    page = new BlogSampleAngularViewChildContentChildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
