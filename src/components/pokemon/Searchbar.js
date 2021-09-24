import React from 'react';

const Searchbar = ({ filterText, onFilterTextChange }) => {
  const handleFilterTextChange = e => {
    onFilterTextChange(e.target.value);
  };

  return (
    <div className="container mt-3">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Filter Pokemon..."
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </form>
    </div>
  );
};

export default Searchbar;
