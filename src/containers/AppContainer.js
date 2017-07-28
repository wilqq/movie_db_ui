import MovieModel from '../models/Movie';
import App from '../components/App';

export default class AppContainer {
  constructor(el) {
    this.el = el;
  }

  init() {
    MovieModel.search({ query: 'aveng' }).then((response) => {
      this.data = response;
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    this.el.appendChild(
      (new App({
        data: this.data,
      })).render()
    );
  }
}
