import React from "react";
import "./SearchBar.scss";
import InputText from "../shared/inputText/InputText";
import ActionButton from "../shared/buttons/action-button/ActionButton";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <InputText placeholderText={"What do you want to watch?"} />
      <ActionButton text={"Search"} />
    </div>
  );
}
