import { div } from '../../lib/make_element';

export default class MoviesList {
  constructor({ movieRenderer, movies }) {
    this.MovieRenderer = movieRenderer;
    this.movies = movies;
  }

  renderMovies() {
    return this.movies.map(movie => (
      (new this.MovieRenderer(movie)).render()
    ));
  }

  render() {
    return (
      div(
        { id: 'movies-list', className: 'movies-list' },
        this.renderMovies()
      )
    );
  }
}
