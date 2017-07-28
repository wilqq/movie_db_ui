import fetchApiData from '../utils/fetch_api_data';

export default class Movie {
  static search(params) {
    return fetchApiData('search/movie', params).then(
      response => response.results
    );
  }
}
