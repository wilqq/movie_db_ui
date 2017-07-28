import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import fetchMock from 'fetch-mock';

import Movie from '../../../src/models/Movie';

chai.use(chaiAsPromised);

describe('Movie', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('search', () => {
    context('valid response', () => {
      const responseBody = JSON.stringify({
        movies: ['movie_1', 'movie_2']
      });

      beforeEach(() => {
        fetchMock.get('*', {
          ok: true,
          status: 200,
          body: responseBody
        });
      });

      it('returns promisse with api response', () => (
        Movie.search({ query: 'query' }).then((data) => {
          expect(JSON.stringify(data)).to.eq(responseBody);
        })
      ));
    });

    context('invalid response', () => {
      beforeEach(() => {
        fetchMock.get('*', {
          ok: false,
          status: 500,
        });
      });

      it('throws error', () => {
        expect(Movie.search()).to.be.rejectedWith(Error);
      });
    });
  });
});
