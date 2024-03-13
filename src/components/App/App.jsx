import './App.css'
import { Navigation } from '../Navigation/Navigation'
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

export const App = () => {
  const Home = lazy(() => import('../../pages/HomePage/HomePage'));
  const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
  const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));
  const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
  const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
  const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));



  return(
    <>
    <Navigation />
    <Suspense fallback={<b>Loading page</b>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </>
  )
}