import React from "react";

export default function SimpleButton({ text = "", classStyle = "" }) {
  return (
    <button type="button" className={classStyle}>
      {text}
    </button>
  );
}
