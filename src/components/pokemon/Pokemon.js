import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Pokemon = () => {
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to All
      </Link>
    </Fragment>
  );
};

export default Pokemon;
