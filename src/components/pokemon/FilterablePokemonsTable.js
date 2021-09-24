import React, { useState } from 'react';
import Searchbar from './Searchbar';
import PokemonsTable from './PokemonsTable';

const FilterablePokemonsTable = ({ pokemons }) => {
  const [filterText, setText] = useState('');

  const handleFilterTextChange = filterText => {
    setText(filterText);
  };

  return (
    <div className="container">
      <Searchbar
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
      />
      <PokemonsTable pokemons={pokemons} filterText={filterText} />
    </div>
  );
};

export default FilterablePokemonsTable;
