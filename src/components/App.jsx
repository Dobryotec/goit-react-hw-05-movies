import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailes/MovieDetailsPage')
);
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

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
