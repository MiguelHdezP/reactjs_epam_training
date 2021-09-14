import React from "react";
import Headings from "../headings/Headings";
import "./SearchResultsCard.scss";

export default function SearchResultsCard({ movieData }) {
  console.log("Ponyo: ", movieData);
  //const [title, genres] = movieData;
  // Question: Why movieData is not iterable?
  return (
    <div className="search-results-card">
      <img src="" alt="" />
      <Headings type={"h4"} text={movieData.title} />
      <p>{movieData.genres.join(", ")}</p>
    </div>
  );
}
