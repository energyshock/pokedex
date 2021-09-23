import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FilterablePokemonTable pokemon={POKEMON} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>
    );
  }
}

class FilterablePokemonTable extends React.Component {
  render() {
    return (
      <div className="container">
        <Searchbar />
        {<PokemonTable pokemon={this.props.pokemon} />}
      </div>
    );
  }
}

class Searchbar extends React.Component {
  render() {
    return (
      <div className="container mt-3">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Filter Pokemon..."
          />
        </form>
      </div>
    );
  }
}

class PokemonTable extends React.Component {
  render() {
    const rows = [];
    this.props.pokemon.forEach(pokemon => {
      rows.push(<PokemonRow pokemon={pokemon} key={pokemon.name} />);
    });

    return (
      <div className="container mt-5">
        <div className="row g-4">{rows}</div>
      </div>
    );
  }
}

class PokemonRow extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const name = pokemon.name;

    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <a href="#" className="btn btn-primary">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const POKEMON = [
  {
    name: 'bulbasaur',
  },
  {
    name: 'ivysaur',
  },
  {
    name: 'venusaur',
  },
  {
    name: 'charmander',
  },
  {
    name: 'charmeleon',
  },
];

// ========================================

ReactDOM.render(<App />, document.getElementById('root'));
