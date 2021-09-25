import { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';
import FilterablePokemonsTable from './components/FilterablePokemonsTable';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pokemonsPerPage = 12;

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromServer = await fetchPokemons();
      setPokemons(pokemonsFromServer);
    };

    getPokemons();
  }, []);

  const fetchPokemons = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=898');
    return res.data.results;
  };

  // Get current pokemons
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  console.log(currentPokemons);

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <Router>
      <Navbar />
      <Route
        exact
        path="/"
        render={() => (
          <>
            <FilterablePokemonsTable pokemons={currentPokemons} />
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              totalPokemons={pokemons.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
      ></Route>
      <Route path="/pokemon/:id" component={Pokemon}></Route>
    </Router>
  );
};

export default App;
