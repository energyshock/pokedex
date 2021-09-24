import React, { Fragment } from 'react';
import FilterablePokemonsTable from '../pokemon/FilterablePokemonsTable';
import * as pokeapiCall from '../../Pokemon.json';

const Home = () => {
  const POKEMON = pokeapiCall.results;
  return (
    <Fragment>
      <FilterablePokemonsTable pokemons={POKEMON} />
    </Fragment>
  );
};

export default Home;
