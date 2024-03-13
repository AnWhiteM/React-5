import { Link } from 'react-router-dom';
const BackLink = ({  }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(location?.state?.from ?? "/")}
      >
        Go back
      </button>
    </div>
  );
};
export default BackLink;