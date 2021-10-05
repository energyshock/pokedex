import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonRow = ({ pokemon, id }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="col">
      <div className="card text-center">
        <img src={imgSrc} className="card-img-top pokemon-sprite" alt="" />
        <div className="card-body pt-0">
          <h5 className="card-title">{pokemon.name}</h5>
          <Link to={`/pokemon/${id}`} className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

PokemonRow.propTypes = {
  pokemon: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default PokemonRow;
