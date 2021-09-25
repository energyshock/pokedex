import PropTypes from 'prop-types';
import PokemonRow from './PokemonRow';

const PokemonsTable = ({ pokemons }) => {
  const regex = /\/[0-9]{1,4}/;

  const getPokemonId = url => {
    return url.match(regex).toString().substring(1);
  };

  return (
    <div className="container mt-5">
      <div className="row g-4 capitalize">
        {pokemons.map((pokemon, index) => (
          <PokemonRow
            pokemon={pokemon}
            key={pokemon.name}
            id={getPokemonId(pokemon.url)}
          />
        ))}
      </div>
    </div>
  );
};

PokemonsTable.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonsTable;
