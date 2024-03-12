import './App.css'
import { NavBar } from '../NavBar/NavBar'
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

export const App = () => {
  const Home = lazy(() => import('../../pages/Home/Home'));
  const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
  const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));
  const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
  const Cast = lazy(() => import('../Cast/Cast'));
  const Reviews = lazy(() => import('../Reviews/Reviews'));



  return(
    <>
    <NavBar />
    <Suspense fallback={<b>Loading page</b>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </>
  )
}