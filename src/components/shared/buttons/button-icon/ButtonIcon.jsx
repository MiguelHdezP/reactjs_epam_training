import React from "react";
import "./ButtonIcon.scss";

export default function ButtonIcon({ text = "" }) {
  return <button type="button">{text}</button>;
}
