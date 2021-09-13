import React from "react";
import "./ActionButton.scss";

export default function ActionButton({ text }) {
  return (
    <button className="action-button" type="button">
      {text}
    </button>
  );
}
