import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';

import Movie from '../../../src/components/Movie';

chai.use(chaiDom);

describe('Movie', () => {
  let subject;
  const movieData = { title: 'title_stub', overview: 'overview_stub', vote_average: 'vote_stub' };

  beforeEach(() => {
    subject = new Movie(movieData);
  });

  describe('render output', () => {
    let renderedContent;

    beforeEach(() => {
      renderedContent = subject.render();
    });

    it('contains title', () => {
      expect(renderedContent.querySelector('.title')).to.have.text(movieData.title);
    });

    it('contains overview', () => {
      expect(renderedContent.querySelector('.overview')).to.have.text(movieData.overview);
    });

    it('contains voteAverage', () => {
      expect(renderedContent.querySelector('.vote-average')).to.have.text(movieData.vote_average);
    });
  });
});
