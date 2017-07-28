import MovieModel from '../models/Movie';
import App from '../components/App';

export default class AppContainer {
  constructor(el) {
    this.el = el;
    this.movies = [];
  }

  handleSearchFormSubmit = (query) => {
    this.query = query;
    this.loadApiData();
  }

  loadApiData() {
    MovieModel.search({ query: this.query }).then((movies) => {
      this.movies = movies;
      this.render();
    });
  }

  renderContent() {
    return (new App({
      movies: this.movies,
      handleSearchFormSubmit: this.handleSearchFormSubmit,
    })).render();
  }

  render() {
    this.el.innerHTML = '';
    this.el.appendChild(
      this.renderContent()
    );
  }
}
