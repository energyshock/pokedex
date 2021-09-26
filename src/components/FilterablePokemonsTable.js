import PropTypes from 'prop-types';
import PokemonsTable from './PokemonsTable';

const FilterablePokemonsTable = ({ pokemons }) => {
  return (
    <div className="container mt-5">
      <PokemonsTable pokemons={pokemons} />
    </div>
  );
};

FilterablePokemonsTable.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default FilterablePokemonsTable;
