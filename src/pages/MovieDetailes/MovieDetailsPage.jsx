import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

  if (!movieDetails) {
    return <Skeleton />;
  }
  const userScore = Math.round(movieDetails.vote_average * 10) + '%';

  const backLinkHref = location.state?.from ?? '/movies';
  const releaseYear = new Date(movieDetails.release_date).getFullYear();
  const { poster_path, title, overview, genres } = movieDetails;
  return (
    <div>
      <SectionFilm>
        <div>
          <StyledButton to={backLinkHref}>Go back</StyledButton>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
          <StyledLink to={'cast'}>Cast</StyledLink>
          <StyledLink to={'reviews'}>Reviews</StyledLink>
        </SectionNavInformation>
      </SectionInformation>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
