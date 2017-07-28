import MoviesList from '../components/MoviesList';
import Movie from '../components/Movie';
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
        (new MoviesList({
          movieRenderer: Movie,
          movies: this.props.data.results,
        })).render()
      ])
    );
  }
}
