import PropTypes from "prop-types";
import React from "react";
import "./ButtonIcon.scss";

export default function ButtonIcon({ text = "", click }) {
  return (
    <button type="button" className="buttonIcon" onClick={click}>
      + {text}
    </button>
  );
}

ButtonIcon.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
