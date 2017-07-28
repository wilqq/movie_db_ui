import { div, h3, p } from '../../lib/make_element';

export default class Movie {
  constructor({ title, overview, poster_path, vote_average }) {
    this.title = title;
    this.overview = overview;
    this.posterPath = poster_path;
    this.voteAverage = vote_average.toString();
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
