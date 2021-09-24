import React from 'react';
import { Link } from 'react-router-dom';

const PokemonRow = ({ pokemon, id }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card text-center">
        <img src={imgSrc} className="card-img-top pokemon-sprite" alt="" />
        <div className="card-body pt-0">
          <h5 className="card-title">{pokemon.name}</h5>
          <Link to={`pokemon/${id}`} className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonRow;
