import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../../api';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    async function fetchCastData() {
      try {
        const fetchedCastData = await getMoviesCast(movieId);
        setCasts(fetchedCastData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCastData();
  }, [movieId]);

  return (
    <>
      {casts && (
        <div>
          <ul>
            {casts.cast.map(cast => (
              <li key={cast.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.name} />
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}