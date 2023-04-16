import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearchMovies } from 'components/services/FetchFilms';
import { Input, Button } from 'pages/MoviesPage/MoviesPage.styled';

import MoviesList from './MoviesList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('');

  const [searchResults, setSearchResults] = useState([]);
  const filmId = searchParams.get('filmId') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ filmId });
  };
  useEffect(() => {
    if (!filmId) return;
    fetchSearchMovies(filmId)
      .then(({ results }) => setSearchResults(results))
      .catch(err => console.error(err));
  }, [filmId]);

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ filmId: evt.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={filmId} onChange={updateQueryString} />
      <Button type="submit">Search</Button>
      <MoviesList searchResults={searchResults} />
    </form>
  );
};

export default MoviesPage;
