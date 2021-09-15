import React, { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import "./SearchBar.scss";
import InputText from "../shared/inputText/InputText";
import ActionButton from "../shared/buttons/action-button/ActionButton";
import SearchResultsCard from "../search-results-card/SearchResultsCard";

export default function SearchBar() {
  const { data } = useContext(MoviesContext);
  const [movies, setMovies] = useState();

  function searchMovies() {
    if (data && data.length > 0) {
      setMovies(
        data.map((elem) => {
          return <SearchResultsCard key={elem.id} movieData={elem} />;
        })
      );
    }
  }

  return (
    <>
      <div className="search-bar">
        <InputText
          placeholderText={"What do you want to watch?"}
          type={"text"}
        />
        <ActionButton text={"Search"} click={searchMovies} />
      </div>
      <div className="search-results">{movies || movies}</div>
    </>
  );
}
