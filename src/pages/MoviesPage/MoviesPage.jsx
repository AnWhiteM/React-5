import { useState, useEffect } from 'react';
import { MovieSearch } from '../../components/MovieSearch/MovieSearch';
import { Loader } from '../../components/Loader/Loader';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getFilm } from '../../../api';
import { MovieList } from '../../components/MovieList/MovieList';

export default function MoviesPage() {
    const location = useLocation();
    console.log('movie', location);
  
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const [params, setParams] = useSearchParams();
    const search = params.get('search') ?? '';
  
    const changeSearch = newSearch => {
      params.set('search', newSearch);
      setParams(params);
    };
  
    const searchFilms = async query => {
      try {
        setLoading(true);
        const response = await getFilm(query);
        setFilms(response.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      if (search.trim() !== '') {
        searchFilms(search);
      }
    }, [search]);
  
    return (
      <div>
        {error && <p>Oops! Something went wrong. Please try again later.</p>}
        {loading ? (
          <Loader />
        ) : (
          <>
            <MovieSearch onSearch={changeSearch} value={search} />
            {films.length > 0 && <MovieList items={films} />}
          </>
        )}
      </div>
    );
  }