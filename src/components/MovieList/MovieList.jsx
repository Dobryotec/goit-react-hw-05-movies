import {
  FilmItem,
  StyledLink,
  FilmList,
} from './MovieList.styled'
import { useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <FilmList>
      {movies.map(({ id, title }, index) => {
        return (
          <FilmItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {index + 1}){title}
            </StyledLink>
          </FilmItem>
        );
      })}
    </FilmList>
  );
};

export default MovieList;
