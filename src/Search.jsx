import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
const Search = ({ search, onSearch }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    onSearch(event);
  };

  return (
    <>
      <InputWithLabel
        id="search"
        /* label="Search" */
        value={search}
        isFocused
        onInputChange={handleChange}
      >
        Search:
      </InputWithLabel>
      <p>
        Searching for <strong>{search}</strong>...
      </p>
    </>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Search;
