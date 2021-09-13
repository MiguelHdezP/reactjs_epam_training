import React from "react";
import "./InputText.scss";

export default function InputText({ placeholderText }) {
  return (
    <input
      className="input-text-style"
      placeholder={placeholderText}
      type="text"
    />
  );
}
