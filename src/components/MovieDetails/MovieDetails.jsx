import { Link, useLocation } from 'react-router-dom';

export const MovieDetails = ({ items }) => {
  const location = useLocation();
  console.log('MD', location);

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