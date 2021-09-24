import React from 'react';
import PokemonRow from './PokemonRow';

const PokemonsTable = ({ pokemons, filterText }) => {
  const rows = [];

  pokemons.forEach(pokemon => {
    if (pokemon.name.indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push(<PokemonRow pokemon={pokemon} key={pokemon.name} />);
  });

  return (
    <div className="container mt-5">
      <div className="row g-4">{rows}</div>
    </div>
  );
};

export default PokemonsTable;
