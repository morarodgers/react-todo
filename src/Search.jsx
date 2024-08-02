import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
const Search = ({ search, onSearch }) => {
  <>
    <InputWithLabel
      id="search"
      value={search}
      isFocused
      onInputChange={onSearch}
    >
      Search:
    </InputWithLabel>
    <p>
      Searching for <strong>{search}</strong>...
    </p>
  </>;
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Search;
