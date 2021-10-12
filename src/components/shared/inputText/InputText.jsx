import PropTypes from "prop-types";
import React from "react";
import "./InputText.scss";

export default function InputText({
  id = "",
  name = "",
  placeholderText = "",
  classStyle = "",
  styleAdjustments = "",
}) {
  let inputStyles = `input-text-style ${classStyle} ${styleAdjustments}`;
  return (
    <input
      id={id}
      name={name}
      className={inputStyles}
      placeholder={placeholderText}
      type="text"
    />
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  classStyle: PropTypes.string,
  styleAdjustments: PropTypes.string,
};
