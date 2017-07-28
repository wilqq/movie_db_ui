const API_KEY = '5a800cb5568fb7c124388be33f9fba81';
const API_URL = 'https://api.themoviedb.org/3';

const buildApiUrl = (endpoint, params) => {
  const url = new URL(`${API_URL}/${endpoint}`);
  const paramsToProcess = {
    ...params,
    api_key: API_KEY,
  };

  Object.keys(paramsToProcess).forEach((paramKey) => {
    url.searchParams.append(paramKey, paramsToProcess[paramKey]);
  });

  return url;
};

export default function fetchApiData(endpoint = '', params = {}) {
  const url = buildApiUrl(endpoint, params);

  return fetch(url).then(
    response => response.json()
  );
}
