import React from 'react';
import PokemonRow from './PokemonRow';

const PokemonsTable = ({ pokemons, filterText }) => {
  const rows = [];

  pokemons.forEach((pokemon, index) => {
    if (pokemon.name.indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push(
      <PokemonRow pokemon={pokemon} key={pokemon.name} id={index + 1} />
    );
  });

  return (
    <div className="container mt-5">
      <div className="row g-4 capitalize">{rows}</div>
    </div>
  );
};

export default PokemonsTable;
