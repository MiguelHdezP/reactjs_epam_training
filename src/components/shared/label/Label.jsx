import PropTypes from "prop-types";
import React from "react";

export default function Label({ text = "", forText = "" }) {
  return <label htmlFor={forText}>{text}</label>;
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  forText: PropTypes.string,
};
