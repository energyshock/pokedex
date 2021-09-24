import React from 'react';

const PokemonRow = ({ pokemon }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title capitalize">{pokemon.name}</h5>
          <a href="#" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonRow;
