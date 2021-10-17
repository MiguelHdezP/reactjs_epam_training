import PropTypes from "prop-types";
import React from "react";
import "./MovieDetails.scss";
import Headings from "../shared/headings/Headings";
import HeaderLogo from "../../assets/images/netflixroulette.png";
import Magnifier from "../../assets/images/magnifying-glass-icon-transparent-16.png";
import { DateYear } from "../../utils/DateConverter";
import { ArrayToCommaList } from "../../utils/ArrayOperations";

export default function MovieDetails({ movie = [], click }) {
  if (movie.length) {
    const {
      poster_path,
      title,
      release_date,
      runtime,
      overview,
      vote_average,
      genres,
    } = movie[0];
    const MovieYear = DateYear(release_date);
    console.log("Chetuito: ");
    return (
      <div className="movieDetails">
        <header className="movieDetails-header">
          <img
            className="movieDetails-header-logo"
            src={HeaderLogo}
            alt="Netflix Roulette Logo"
          />
          <div>
            <img
              className="movieDetails-header-searchIcon"
              src={Magnifier}
              alt="Search Bar"
              onClick={click}
            />
          </div>
        </header>
        <section className="movieDetails-section">
          <div className="movieDetails-section-imageContainer">
            <img
              className="movieDetails-section-image"
              src={poster_path}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://dummyimage.com/600x800/ccc/fff.jpg&text=No+image+available";
              }}
            />
          </div>
          <div className="movieDetails-info">
            <div className="movieDetails-info-titleRating">
              <Headings
                type="h1"
                text={title}
                styleAdjustment="movieDetails-info-title"
              />
              <span className="movieDetails-info-rating">{vote_average}</span>
            </div>
            <p className="movieDetails-info-genre">
              {ArrayToCommaList(genres)}
            </p>
            <div className="movieDetails-info-dateTime">
              <span className="movieDetails-info-date">{MovieYear}</span>
              <span className="movieDetails-info-time">{`${runtime} min`}</span>
            </div>
            <p className="movieDetails-info-overview">{overview}</p>
          </div>
        </section>
      </div>
    );
  } else {
    return <span></span>;
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      runtime: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};
