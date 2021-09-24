import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* import * as pokeapiCall from './Pokemon.json';
import FilterablePokemonsTable from './components/pokemon/FilterablePokemonsTable'; */
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Pokemon from './components/pokemon/Pokemon';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pokemon/:id" component={Pokemon}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

export default App;
