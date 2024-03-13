import { useParams, NavLink, Outlet, useNavigate} from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getMoviesId } from '../../../api';
import css from './MovieDetailsPage.module.css'



export default function MovieDetailsPage() {
  const navigate = useNavigate();
  

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMoviesId(movieId);

        setMovie(response);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();
  }, [movieId]);


  return (
    <>
      {error && <p>Oops!</p>}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={css.backBtn}
      >
        Go back
      </button>

      {movie && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <h2>
            User Score: <p>{movie.vote_average}</p>
          </h2>
          <p>{movie.overview}</p>
          <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <div className={css.navBar}>
            <NavLink to="cast" className={css.link}>
              Cast
            </NavLink>
            <NavLink to="reviews" className={css.link}>
              Reviews
            </NavLink>
          </div>
          <Suspense fallback={<b>Loading page</b>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}