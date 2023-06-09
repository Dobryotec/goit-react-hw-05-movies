import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetails } from 'components/services/FetchFilms';
import {
  StyledButton,
  SectionFilm,
  SectionBody,
  SectionBodyTitle,
  SectionBodySubTitle,
  SectionBodyText,
  SectionInformationTitle,
  SectionInformation,
  SectionNavInformation,
  StyledLink,
  StyledImg,
} from './MovieDetailes.styled';
import Skeleton from '../../components/Skeleton';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(res => setMovieDetails(res))
      .catch(err => console.error(err));
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
  if (!movieDetails) {
    return <Skeleton />;
  }
  const userScore = Math.round(movieDetails.vote_average * 10) + '%';

  const releaseYear = new Date(movieDetails.release_date).getFullYear();
  const { poster_path, title, overview, genres } = movieDetails;
  return (
    <div>
      <SectionFilm>
        <div>
          <StyledButton to={backLinkHref.current}>Go back</StyledButton>
          <StyledImg
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://via.placeholder.com/500x750?text=No+Image+Available'
            }
            alt={title}
          />
        </div>
        <div>
          <SectionBody>
            <SectionBodyTitle>
              {title}({releaseYear})
            </SectionBodyTitle>
            <p>User Score: {userScore}</p>
            <SectionBodySubTitle> Overview</SectionBodySubTitle>
            <SectionBodyText>{overview}</SectionBodyText>
            <SectionBodySubTitle>Genres</SectionBodySubTitle>
            <p>{genres.map(genre => genre.name).join(' ')}</p>
          </SectionBody>
        </div>
      </SectionFilm>
      <SectionInformation>
        <SectionInformationTitle>
          Additional information
        </SectionInformationTitle>
        <SectionNavInformation>
          <StyledLink to={'cast'} state={{ from: location }}>
            Cast
          </StyledLink>
          <StyledLink to={'reviews'} state={{ from: location }}>
            Reviews
          </StyledLink>
        </SectionNavInformation>
      </SectionInformation>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
