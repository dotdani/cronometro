import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Button({ icon, size, shape, title, onClick, disabled }) {
  return (
    <button
      className={`${size} ${shape}`}
      title={title}
      disabled={disabled ? "disabled" : ""}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={`fa-solid fa-${icon}`} />
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  shape: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
