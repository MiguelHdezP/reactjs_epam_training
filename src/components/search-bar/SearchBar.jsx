import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import "./SearchBar.scss";
import InputText from "../shared/inputText/InputText";
import ActionButton from "../shared/buttons/action-button/ActionButton";

export default function SearchBar() {
  const { data } = useContext(MoviesContext);

  return (
    <div className="search-bar">
      <InputText placeholderText={"What do you want to watch?"} />
      <ActionButton text={"Search"} />
    </div>
  );
}
