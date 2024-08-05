import PropTypes from "prop-types";
// Reusable button component
const Button = ({ handleClick, children, className }) => {
  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
