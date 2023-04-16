import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailes/MovieDetailsPage';
import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage location={location} />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route
            path="movies/:movieId"
            element={<MovieDetailsPage location={location} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
