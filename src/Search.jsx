import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import { useState } from "react";
const Search = ({ search, onSearch }) => {
  // State variables to track focus status of search input
  const [isFocused, setIsFocused] = useState(false);

  // Functions to handle focus and blur events
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <InputWithLabel
        id="search"
        value={search}
        onInputChange={onSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Search:
      </InputWithLabel>

      {/* Display a message when user types in search input*/}
      {isFocused && search && (
        <p>
          Searching for <strong>{search}...</strong>
        </p>
      )}
    </>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Search;
