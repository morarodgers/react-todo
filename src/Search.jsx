import { useState } from "react";
import PropTypes from "prop-types";
const Search = (props) => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{search}</strong>.
      </p>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
