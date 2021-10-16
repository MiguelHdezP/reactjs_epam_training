import PropTypes from "prop-types";
import React from "react";
import "./TextArea.scss";

export default function TextArea({
  id = "",
  name = "",
  rows = 0,
  styleAdjustment = "",
}) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      className={`textarea-style ${styleAdjustment}`}
    ></textarea>
  );
}

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  styleAdjustment: PropTypes.string,
};
