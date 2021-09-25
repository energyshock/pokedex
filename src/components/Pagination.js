import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pagination = ({
  pokemonsPerPage,
  totalPokemons,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  for (
    let i = currentPage;
    i < currentPage + 3 && currentPage < pageNumbers.length;
    i++
  ) {
    pages.push(
      <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
        <Link to="/" onClick={() => paginate(i)} className="page-link">
          {i}
        </Link>
      </li>
    );
  }

  return (
    <nav className="container">
      <ul className="pagination d-flex flex-wrap justify-content-center mt-4 gap-2">
        <li className="page-item">
          <Link
            to="/"
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className="page-link"
          >
            Previous
          </Link>
        </li>
        {pages.map(page => page)}
        <li className="page-item">
          <Link
            to="/"
            onClick={() =>
              currentPage < pageNumbers.length && paginate(currentPage + 1)
            }
            className="page-link"
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pokemonsPerPage: PropTypes.number.isRequired,
  totalPokemons: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
