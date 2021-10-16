import PropTypes from "prop-types";
import React from "react";
import "./Headings.scss";

export default function Headings({
  type = "",
  text = "",
  styleAdjustment = "",
}) {
  let heading;
  switch (type) {
    case "h1":
      heading = <h1 className={styleAdjustment}>{text}</h1>;
      break;
    case "h2":
      heading = <h2 className={styleAdjustment}>{text}</h2>;
      break;
    case "h3":
      heading = <h3 className={styleAdjustment}>{text}</h3>;
      break;
    case "h4":
      heading = <h4 className={styleAdjustment}>{text}</h4>;
      break;
    default:
      heading = <h6 className={styleAdjustment}>{text}</h6>;
  }
  return heading;
}

Headings.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
