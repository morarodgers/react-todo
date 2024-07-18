//import { useState } from "react";
import PropTypes from "prop-types";
const Search = ({ search, onSearch }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    onSearch(event);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={handleChange} />
      <p>
        Searching for <strong>{search}</strong>.
      </p>
    </>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Search;
