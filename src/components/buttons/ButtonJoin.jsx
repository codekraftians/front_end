import { Link } from 'react-router-dom';

const ButtonJoin = () => {
  return (
    <Link to="/login" className="no-underline">
      <button className="btn btn-primary text-base">Join!</button>
    </Link>
  );
};

export default ButtonJoin;