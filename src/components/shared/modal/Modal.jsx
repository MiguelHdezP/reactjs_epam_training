import PropTypes from "prop-types";
import React from "react";
import "./Modal.scss";

export default function Modal({ children, styleAdjustments = "" }) {
  return (
    <div className={`modal ${styleAdjustments}`}>
      <div className="modal-content">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
