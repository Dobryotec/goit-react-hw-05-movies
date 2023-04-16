import { useParams } from 'react-router-dom';
import { fetchMovieCasts } from '../services/FetchFilms';
import { useEffect, useState } from 'react';
import { CastList, CastItem } from './Cast.styled';
const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCasts(movieId)
      .then(({ cast }) => setCast(cast))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <CastList>
      {cast &&
        cast.map(item => {
          return (
            <>
              <CastItem key={item.id}>
                {item.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${item.profile_path}`}
                    alt={`${item.name}'s profile`}
                  />
                ) : (
                  <img src={'https://via.placeholder.com/92'} alt={''} />
                )}
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </CastItem>
            </>
          );
        })}
    </CastList>
  );
};

export default Cast;
