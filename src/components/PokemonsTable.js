import PropTypes from 'prop-types';
import PokemonRow from './PokemonRow';

const PokemonsTable = ({ pokemons }) => {
  return (
    <div className="container mt-5">
      <div className="row g-4 capitalize">
        {pokemons.map((pokemon, index) => (
          <PokemonRow pokemon={pokemon} key={pokemon.name} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

PokemonsTable.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonsTable;
