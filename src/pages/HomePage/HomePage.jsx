import { useState, useEffect } from 'react';
import { fetchPopularFilms } from 'components/services/FetchFilms';
import {
  StyledLink,
  FilmItem,
  FilmTitle,
} from 'pages/HomePage/HomePage.styled';
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
      <ul>
        {films.map((film, index) => {
          return (
            <FilmItem key={film.id}>
              <StyledLink to={`/movies/${film.id}`}>
                {index + 1}){film.title}
              </StyledLink>
            </FilmItem>
          );
        })}
      </ul>
    </>
  );
};
export default HomePage;
