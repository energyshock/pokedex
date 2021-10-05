import { Link } from 'react-router-dom';

const BackToAllBtn = () => {
  return (
    <div className="container container-details mt-3">
      <div className="d-grid gap-2">
        <Link to="/" className="btn btn-success">
          Back to All
        </Link>
      </div>
    </div>
  );
};

export default BackToAllBtn;
