import React from "react";
import "./Headings.scss";

export default function Headings({ type, text }) {
  let heading;
  switch (type) {
    case "h1":
      heading = <h1>{text}</h1>;
      break;
    case "h2":
      heading = <h2>{text}</h2>;
      break;
    case "h3":
      heading = <h3>{text}</h3>;
      break;
    case "h4":
      heading = <h4>{text}</h4>;
      break;
    default:
      heading = <h6>{text}</h6>;
  }
  return heading;
}
