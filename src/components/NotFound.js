import BackToAllBtn from './BackToAllBtn';

const NotFound = () => {
  return (
    <>
      <BackToAllBtn />
      <div className="container container-details mt-3">
        <div className="card mt-3">
          <div className="card-body">
            <h1 className="card-title">Not Found</h1>
            <p className="lead">
              The page you are looking for does not exist...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
