import React from 'react';

const PokemonRow = ({ pokemon, id }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card text-center">
        <img src={imgSrc} className="card-img-top pokemon-sprite" alt="" />
        <div className="card-body pt-0">
          <h5 className="card-title">{pokemon.name}</h5>
          <a href="#" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonRow;
