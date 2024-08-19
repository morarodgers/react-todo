import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import Button from "./Button";
import { useState } from "react";
const Search = ({ search, onSearch }) => {
  // State variables to track focus status of search input
  const [isFocused, setIsFocused] = useState(false);
  // State variable to store the search term before submitting
  const [localSearch, setLocalSearch] = useState(search);

  // Functions to handle focus and blur events
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Function to update local search state when user types
  const handleInputChange = (event) => {
    setLocalSearch(event.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch({ target: { value: localSearch } });
  };

  return (
    <>
      <InputWithLabel
        id="search"
        value={localSearch}
        onInputChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Search:
      </InputWithLabel>
      <Button handleClick={handleSearchSubmit} className="search" type="submit">
        Submit
      </Button>

      {/* Display a message when user types in search input*/}
      {isFocused && localSearch && (
        <p>
          Searching for <strong>{localSearch}...</strong>
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
