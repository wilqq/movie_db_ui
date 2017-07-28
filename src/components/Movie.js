import { div, h3, p } from '../../lib/make_element';

export default class Movie {
  constructor({ title, overview, posterPath, voteAverage }) {
    this.title = title;
    this.overview = overview;
    this.posterPath = posterPath;
    this.voteAverage = voteAverage;
  }

  render() {
    return (
      div({ className: 'movie' }, [
        h3({ className: 'title' }, [
          this.title
        ]),
        div({ className: 'overview' }, [
          p({}, [this.overview])
        ]),
        div({ className: 'vote-average' }, [
          this.voteAverage
        ])
      ])
    );
  }
}
