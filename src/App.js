import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';
import * as pokeapiCall from './Pokemon.json';
import FilterablePokemonsTable from './components/FilterablePokemonsTable';

const App = () => {
  const [pokemons, setPokemons] = useState(pokeapiCall.results);

  console.log('App.js');

  /* useEffect(() => {
    const getPokemons = () => setPokemons(pokeapiCall.results);
    getPokemons();
  }, []); */

  return (
    <Router>
      <Navbar />
      <Route
        exact
        path="/"
        render={() => (
          <>
            <FilterablePokemonsTable pokemons={pokemons} />
          </>
        )}
      ></Route>
      <Route path="/pokemon/:id" component={Pokemon}></Route>
    </Router>
  );
};

export default App;
