import { FilmItem, StyledLink } from './HomePage.styled';
import { useLocation } from 'react-router-dom';

const HomeMovieList = ({ films }) => {
  const location = useLocation();
  console.log(location);
  return (
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
  );
};

export default HomeMovieList;
