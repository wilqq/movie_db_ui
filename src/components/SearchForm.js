import { form, input, button } from '../../lib/make_element';

export default class SearchForm {
  constructor({ handleSubmit }) {
    this.handleSubmit = handleSubmit;
  }

  onSubmit = (event) => {
    const query = event.target.elements.query.value;

    event.preventDefault();
    this.handleSubmit(query);
  }

  render() {
    return (
      form({ onsubmit: this.onSubmit, id: 'search-form' }, [
        input({ name: 'query' }),
        button({ type: 'submit' }, ['Search'])
      ])
    );
  }
}
