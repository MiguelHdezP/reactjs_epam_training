import React from "react";
import "./ActionButton.scss";

export default function ActionButton({ text = "", classStyle = "", click }) {
  let buttonStyles = `action-button ${classStyle}`
  
  return (
    <button className={buttonStyles} type="button" onClick={click}>
      {text}
    </button>
  );
}
