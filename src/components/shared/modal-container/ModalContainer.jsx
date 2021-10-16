import PropTypes from "prop-types";
import React from "react";
import "./ModalContainer.scss";

export default function ModalContainer({ children }) {
  return <div className="modal-container">{children}</div>;
}

ModalContainer.propTypes = {
  children: PropTypes.element,
};
