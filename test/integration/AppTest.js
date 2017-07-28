describe('AppTest', () => {
  describe('Initial home page content', () => {
    it('contains title header', () => {
      expect(document.querySelector('#root #title')).to.have.text('Movie DB UI');
    });

    it('contains search button', () => {
      expect(document.querySelector('#root #search-form button')).to.have.text('Search');
    });

    it('contains empty movies list', () => {
      expect(document.querySelector('#root #movies-list')).to.have.text('');
    });
  });

  describe('Home page content after search', () => {
    before(() => {
      const input = document.querySelector('#search-form input');
      const button = document.querySelector('#search-form button');

      input.value = 'ave';
      button.click();
    });

    it('contains movies list');
  });
});

