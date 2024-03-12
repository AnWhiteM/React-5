import { TrendingMovies } from "../../components/TrendingMovies/TrendingMovies";
import { useEffect, useState } from "react";
import { getTrendMovies } from '../../../api';
import { Loader } from "../../components/Loader/Loader";
import { useLocation } from 'react-router-dom';

export default function Home() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
  
    const location = useLocation();
  console.log('home', location);


    const trendingFilms = async () => {
      try {
        setLoading(true);
        const response = await getTrendMovies();
        setMovies(response.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      trendingFilms();
    }, []);
  
    return (
      <div>
        <h1>Trending Today</h1>
        {error && <p>Oops! Something went wrong. Please try again later.</p>}
        {loading ? <Loader /> : movies.length > 0 && <TrendingMovies items={movies} />}
      </div>
    );
  }