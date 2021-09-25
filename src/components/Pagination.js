import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pagination = ({
  pokemonsPerPage,
  totalPokemons,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="container">
      <ul className="pagination d-flex flex-wrap justify-content-center mt-4 gap-2">
        <li className="page-item">
          <Link
            to="/"
            onClick={currentPage > 1 && (() => paginate(currentPage - 1))}
            className="page-link"
          >
            Previous
          </Link>
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number && 'active'}`}
          >
            <Link to="/" onClick={() => paginate(number)} className="page-link">
              {number}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link
            to="/"
            onClick={
              currentPage < pageNumbers.length &&
              (() => paginate(currentPage + 1))
            }
            className="page-link"
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
  /* return (
    <nav className="container">
      <ul className="pagination d-flex flex-wrap justify-content-center mt-4 gap-2">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number && 'active'}`}
          >
            <Link to="/" onClick={() => paginate(number)} className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ); */
};

Pagination.propTypes = {
  pokemonsPerPage: PropTypes.number.isRequired,
  totalPokemons: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
