import React from 'react';
import './App.css';
import * as pokeapiCall from './Pokemon.json';
import FilterablePokemonsTable from './components/pokemon/FilterablePokemonsTable';
import Navbar from './components/layout/Navbar';

const App = () => {
  const POKEMON = pokeapiCall.results;
  return (
    <div>
      <Navbar />
      <FilterablePokemonsTable pokemons={POKEMON} />
    </div>
  );
};

export default App;
