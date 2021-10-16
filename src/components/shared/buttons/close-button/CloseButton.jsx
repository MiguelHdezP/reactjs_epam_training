import PropTypes from "prop-types";
import React from "react";
import "./CloseButton.scss";

export default function CloseButton({ click, styleAdjustment = "" }) {
  return (
    <button className={`close-button right ${styleAdjustment}`} onClick={click}>
      X
    </button>
  );
}

CloseButton.propTypes = {
  click: PropTypes.func.isRequired,
  styleAdjustment: PropTypes.string,
};
