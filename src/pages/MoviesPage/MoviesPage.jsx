import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearchMovies } from 'components/services/FetchFilms';
import { Input, Button } from 'pages/MoviesPage/MoviesPage.styled';
import { FilmItem, FilmList } from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState(
    () => JSON.parse(localStorage.getItem('searchResults')) ?? []
  );

  const handleSubmit = e => {
    e.preventDefault();
    setValue('');
    setSearchParams(`?filmId=${value}`);

    fetchSearchMovies(value)
      .then(({ results }) => setSearchResults(results))
      .catch(err => console.error(err));
  };
  useEffect(() => {
    localStorage.setItem('searchResults', JSON.stringify(searchResults));
  }, [searchResults]);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={value} onChange={handleChange} />
      <Button type="submit">Search</Button>
      <FilmList>
        {searchResults.map((result, index) => {
          return (
            <FilmItem key={result.id}>
              <Link to={`/movies/${result.id}`}>
                {index + 1}){result.title}
              </Link>
            </FilmItem>
          );
        })}
      </FilmList>
    </form>
  );
};

export default MoviesPage;
