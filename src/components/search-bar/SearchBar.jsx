import React, { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import "./SearchBar.scss";
import InputText from "../shared/inputText/InputText";
import ActionButton from "../shared/buttons/action-button/ActionButton";
import SearchResultsCard from "../search-results-card/SearchResultsCard";

export default function SearchBar() {
  const { data } = useContext(MoviesContext);
  const noMovies = "Sorry, there are no movies";
  const [movies, setMovies] = useState();
  console.log("movies: ", movies);
  function searchMovies() {
    console.log("here: ", data);
    if (data && data.length > 0) {
      setMovies(
        data.map((elem) => {
          console.log("Petete: ", elem);
          return <SearchResultsCard movieData={elem} />;
        })
      );
    }
  }

  return (
    <>
      <div className="search-bar">
        <InputText placeholderText={"What do you want to watch?"} />
        <ActionButton text={"Search"} click={searchMovies} />
      </div>
      <div className="search-results">{movies || movies}</div>
    </>
  );
}
