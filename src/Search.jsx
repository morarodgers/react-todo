import PropTypes from "prop-types";
const Search = ({ search, onSearch }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    onSearch(event);
  };

  return (
    <>
      <InputWithLabel
        id="search"
        label="Search"
        value={search}
        isFocused
        onInputChange={handleChange}
      />
      <p>
        Searching for <strong>{search}</strong>...
      </p>
    </>
  );
};

const InputWithLabel = ({
  id,
  label,
  value,
  type = "text",
  onInputChange,
  isFocused,
}) => (
  <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      autoFocus={isFocused}
      onChange={onInputChange}
    />
  </>
);

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  isFocused: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
