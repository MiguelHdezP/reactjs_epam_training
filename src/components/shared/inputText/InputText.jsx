import React from "react";
import "./InputText.scss";

export default function InputText({ placeholderText = "", classStyle = "" }) {
  let inputStyles = `input-text-style ${classStyle}`;
  return (
    <input className={inputStyles} placeholder={placeholderText} type="text" />
  );
}
