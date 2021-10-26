import PropTypes from "prop-types";
import React from "react";
import "./DatePicker.scss";

export default function DatePicker({
  id,
  name,
  value,
  min,
  max,
  styleAdjustments,
}) {
  return (
    <input
      type="date"
      id={id}
      name={name}
      value={value}
      min={min}
      max={max}
      className={`input-date-style ${styleAdjustments}`}
    />
  );
}

DatePicker.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  styleAdjustments: PropTypes.string,
};
