import { useState, useEffect } from 'react';
import { fetchPopularFilms } from 'components/services/FetchFilms';
import { FilmTitle } from 'pages/HomePage/HomePage.styled';
import HomeMovieList from './HomeMovieList';
const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchPopularFilms()
      .then(({ results }) => setFilms(results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <FilmTitle>Trending today</FilmTitle>
      <HomeMovieList films={films} />
    </>
  );
};
export default HomePage;
