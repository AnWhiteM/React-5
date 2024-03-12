import { Link, useLocation } from 'react-router-dom';

export const TrendingMovies = ({ items }) => {
    const location = useLocation();

    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/movie/${item.id}`} state={location}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };