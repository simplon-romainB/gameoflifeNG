import { GameoflifeNGPage } from './app.po';

describe('gameoflife-ng App', function() {
  let page: GameoflifeNGPage;

  beforeEach(() => {
    page = new GameoflifeNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
