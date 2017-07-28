import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';

import Movie from '../../../src/components/Movie';

chai.use(chaiDom);

describe('Movie', () => {
  let subject;

  beforeEach(() => {
    subject = new Movie({ title: 'title_stub', overview: 'overview_stub', voteAverage: 'vote_stub' });
  });

  describe('render output', () => {
    let renderedContent;

    beforeEach(() => {
      renderedContent = subject.render();
    });

    it('contains title', () => {
      expect(renderedContent.querySelector('.title')).to.have.text('title_stub');
    });

    it('contains overview', () => {
      expect(renderedContent.querySelector('.overview')).to.have.text('overview_stub');
    });

    it('contains voteAverage', () => {
      expect(renderedContent.querySelector('.vote-average')).to.have.text('vote_stub');
    });
  });
});
