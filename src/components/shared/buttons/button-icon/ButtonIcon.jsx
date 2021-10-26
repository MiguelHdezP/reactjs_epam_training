import PropTypes from "prop-types";
import React from "react";
import "./ButtonIcon.scss";

export default function ButtonIcon({ children, click }) {
  return (
    <button type="button" className="buttonIcon" onClick={click}>
      {children}
    </button>
  );
}

ButtonIcon.propTypes = {
  click: PropTypes.func.isRequired,
};
