const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'a8e8f1f6f05f8bbeb94fac813dcc486c';

export function fetchPopularFilms() {
  return fetch(`${_apiBase}trending/movie/day?api_key=${_apiKey}`).then(res =>
    res.json()
  );
}

export function fetchSearchMovies(value) {
  return fetch(
    `${_apiBase}search/movie?api_key=${_apiKey}&query=${value}&language=en-US&page=1&include_adult=false`
  ).then(res => res.json());
}

export function fetchMovieDetails(movieId) {
  return fetch(`${_apiBase}movie/${movieId}?api_key=${_apiKey}`).then(res =>
    res.json()
  );
}
export function fetchMovieCasts(movieId) {
  return fetch(`${_apiBase}movie/${movieId}/credits?api_key=${_apiKey}`).then(
    res => res.json()
  );
}

export function fetchMovieReviews(movieId) {
  return fetch(
    `${_apiBase}movie/${movieId}/reviews?api_key=${_apiKey}&language=en-US&page=1`
  ).then(res => res.json());
}
