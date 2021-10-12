import React from "react";
import "./ErrorUI.scss";
import "../../movie-card/MovieCard.scss";
import Headings from "../headings/Headings";

export default function ErrorUI() {
  return (
    <div className="movieCard">
      <img
        className="movieCard-image"
        src={
          "https://dummyimage.com/600x800/ccc/fff.jpg&text=No+image+available"
        }
        alt="No movie data"
      />
      <div className="movieCard-info">
        <Headings type="h4" text={"Sorry there is no info"} />
        <span className="movieCard-info-year"></span>
      </div>
      <p className="movieCard-genres"></p>
    </div>
  );
}
