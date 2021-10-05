import { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Pokemon from './components/Pokemon';
import FilterablePokemonsTable from './components/FilterablePokemonsTable';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 12;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=898'
        );
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, []);

  // Get current pokemons
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
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
        <Route exact path="/pokemon/:id" component={Pokemon}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

export default App;
