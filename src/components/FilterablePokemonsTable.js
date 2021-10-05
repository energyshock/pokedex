import PropTypes from 'prop-types';
import PokemonsTable from './PokemonsTable';
import Spinner from './Spinner';

const FilterablePokemonsTable = ({ pokemons }) => {
  if (pokemons.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div className="container mt-3">
        <PokemonsTable pokemons={pokemons} />
      </div>
    );
  }
};

FilterablePokemonsTable.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default FilterablePokemonsTable;
