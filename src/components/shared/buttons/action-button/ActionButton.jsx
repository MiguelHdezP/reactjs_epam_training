import PropTypes from "prop-types";
import React from "react";
import "./ActionButton.scss";

export default function ActionButton({
  text = "",
  classStyle = "",
  click,
  styleAdjustments = "",
}) {
  let buttonStyles = `action-button ${classStyle} ${styleAdjustments}`;

  return (
    <button className={buttonStyles} type="button" onClick={click}>
      {text}
    </button>
  );
}

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  classStyle: PropTypes.string,
  click: PropTypes.func.isRequired,
  styleAdjustments: PropTypes.string,
};
