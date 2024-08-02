import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({
  id,
  children,
  value,
  type = "text",
  onInputChange,
  isFocused,
  onFocus,
  onBlur,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  /* name: PropTypes.string.isRequired, */
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  isFocused: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputWithLabel;
