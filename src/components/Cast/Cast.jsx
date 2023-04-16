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
  console.log(cast);
  return (
    <CastList>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => {
          return (
            <>
              <CastItem key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w92${profile_path} `
                      : 'https://via.placeholder.com/92'
                  }
                  alt={name}
                />

                <p>{name}</p>
                <p>Character: {character}</p>
              </CastItem>
            </>
          );
        })}
    </CastList>
  );
};

export default Cast;
