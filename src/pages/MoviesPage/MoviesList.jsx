import { Link, useLocation } from 'react-router-dom';
import { FilmItem, FilmList } from './MoviesPage.styled';

const MoviesList = ({ searchResults }) => {
  const location = useLocation();
  console.log(location);
  return (
    <FilmList>
      {searchResults.map(({ id, title }, index) => {
        return (
          <FilmItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {index + 1}){title}
            </Link>
          </FilmItem>
        );
      })}
    </FilmList>
  );
};

export default MoviesList;
