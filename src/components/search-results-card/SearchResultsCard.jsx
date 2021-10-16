import PropTypes from "prop-types";
import React from "react";
import Headings from "../shared/headings/Headings";
import "./SearchResultsCard.scss";

export default function SearchResultsCard({ movieData }) {
  return (
    <div className="search-results-card">
      <img src="" alt="" />
      <Headings type={"h4"} text={movieData.title} />
      <p>{movieData.genres.join(", ")}</p>
    </div>
  );
}

SearchResultsCard.propTypes = {
  movieData: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
};
