import MoviesList from '../components/MoviesList';
import Movie from '../components/Movie';
import SearchForm from '../components/SearchForm';
import { div, h1 } from '../../lib/make_element';


export default class App {
  constructor(props) {
    this.props = props;
  }

  render() {
    return (
      div({ className: 'container' }, [
        h1({ id: 'title' }, [
          'Movie DB UI'
        ]),
        (new SearchForm({
          handleSubmit: this.props.handleSearchFormSubmit,
        })).render(),
        (new MoviesList({
          movieRenderer: Movie,
          movies: this.props.movies,
        })).render()
      ])
    );
  }
}
