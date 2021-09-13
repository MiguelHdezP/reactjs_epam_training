import React from "react";

export default function Button({ text, classStyle }) {
  return (
    <button type="button" className={classStyle}>
      {text}
    </button>
  );
}
