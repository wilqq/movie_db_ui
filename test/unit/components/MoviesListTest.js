import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';

import MoviesList from '../../../src/components/MoviesList';

chai.use(chaiDom);

let renderedData = [];

class TestMovieRenderer {
  constructor(data) {
    this.data = data;
  }

  render() {
    renderedData.push(this.data);
    return 'rendered_movie';
  }
}

describe('MoviesList', () => {
  let subject;
  const moviesData = [
    { title: 'title_stub', overview: 'overview_stub', voteAverage: 'vote_stub' },
    { title: 'title_stub_2', overview: 'overview_stub_2', voteAverage: 'vote_stub_2' },
  ];

  beforeEach(() => {
    subject = new MoviesList({ movieRenderer: TestMovieRenderer, movies: moviesData });
  });

  describe('render', () => {
    let renderedContent;

    beforeEach(() => {
      renderedData = [];
      renderedContent = subject.render();
    });

    it('output contains renderer results', () => {
      expect(renderedContent).to.have.text('rendered_movierendered_movie');
    });

    it('pass proper data to movieRenderer', () => {
      const moviesDataJson = JSON.stringify(moviesData);
      const renderedDataJson = JSON.stringify(renderedData);

      expect(moviesDataJson).to.eq(renderedDataJson);
    });
  });
});

