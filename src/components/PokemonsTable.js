import PropTypes from 'prop-types';
import PokemonRow from './PokemonRow';

const PokemonsTable = ({ pokemons }) => {
  const regex = /\/[0-9]{1,4}/;

  const getPokemonId = url => {
    return url.match(regex).toString().substring(1);
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 capitalize">
        {pokemons.map(pokemon => (
          <PokemonRow
            pokemon={pokemon}
            key={pokemon.name}
            id={getPokemonId(pokemon.url)}
          />
        ))}
      </div>
    </>
  );
};

PokemonsTable.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonsTable;
