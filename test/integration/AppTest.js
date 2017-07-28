describe('AppTest', () => {
  describe('Initial home page content', () => {
    it('contains title header', () => {
      expect(document.querySelector('#root')).to.have.text('Movie DB UI');
    });
  });
});
