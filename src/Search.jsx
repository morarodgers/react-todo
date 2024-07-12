//import { useState } from "react";
import PropTypes from "prop-types";
const Search = ({ search, onSearch }) => {
  //const [search, setSearch] = useState("");
  //const { search, onSearch } = props;
  const handleChange = (event) => {
    //setSearch(event.target.value);
    console.log(event.target.value);
    //props.onSearch(event);
    onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={handleChange} />
      <p>
        Searching for <strong>{search}</strong>.
      </p>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Search;
