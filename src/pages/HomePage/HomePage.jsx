import { useState, useEffect } from 'react';
import { fetchPopularFilms } from 'components/services/FetchFilms';
import { useLocation } from 'react-router-dom';
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

  const location = useLocation();
  console.log(location);
  return (
    <>
      <FilmTitle>Trending today</FilmTitle>
      <ul>
        {films.map(({ id, title }, index) => {
          return (
            <FilmItem key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {index + 1}){title}
              </StyledLink>
            </FilmItem>
          );
        })}
      </ul>
    </>
  );
};
export default HomePage;
