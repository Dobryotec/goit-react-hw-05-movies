import { useParams, Outlet } from 'react-router-dom';
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

const MovieDetails = ({ location }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(res => setMovieDetails(res))
      .catch(err => console.error(err));
  }, [movieId]);

  if (!movieDetails) {
    return <Skeleton />;
  }
  const userScore = Math.round(movieDetails.vote_average * 10) + '%';

  const backLinkHref = location.state?.from ?? '/movies';
  const releaseYear = new Date(movieDetails.release_date).getFullYear();

  return (
    <div>
      <SectionFilm>
        <div>
          <StyledButton to={backLinkHref}>Go back</StyledButton>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
        <div>
          <SectionBody>
            <SectionBodyTitle>
              {movieDetails.title}({releaseYear})
            </SectionBodyTitle>
            <p>User Score: {userScore}</p>
            <SectionBodySubTitle> Overview</SectionBodySubTitle>
            <SectionBodyText>{movieDetails.overview}</SectionBodyText>
            <SectionBodySubTitle>Genres</SectionBodySubTitle>
            <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
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
      <Outlet />
    </div>
  );
};
export default MovieDetails;
