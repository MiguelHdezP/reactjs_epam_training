import PropTypes from "prop-types";
import React, { useState } from "react";
import Headings from "../shared/headings/Headings";
import "./MovieCard.scss";
import { DateYear } from "../../utils/DateConverter";
import { ArrayToCommaList } from "../../utils/ArrayOperations";
import Tooltip from "../shared/tooltip/Tooltip";

export default function MovieCard({
  imagePath,
  title,
  date,
  genres,
  openCloseModalEdit,
  openCloseModalDelete,
}) {
  const [toggleTootip, setToggleTooltip] = useState(true);
  const MovieYear = DateYear(date);
  if (
    typeof title !== "string" ||
    !title.length ||
    typeof date !== "string" ||
    !date.length ||
    typeof title !== "string" ||
    !title.length ||
    !Array.isArray(genres) ||
    !genres.length
  ) {
    throw new Error("An error occurred");
  }

  function openTooltip() {
    setToggleTooltip(!toggleTootip);
  }

  return (
    <div className="movieCard">
      {toggleTootip ? (
        <button className="MovieCard-options" onClick={openTooltip}></button>
      ) : (
        <Tooltip
          text1="Edit"
          text2="Delete"
          closeTooltip={openTooltip}
          toggleModalEdit={openCloseModalEdit}
          toggleModalDelete={openCloseModalDelete}
        />
      )}

      <img
        className="movieCard-image"
        src={imagePath}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://dummyimage.com/600x800/ccc/fff.jpg&text=No+image+available";
        }}
      />
      <div className="movieCard-info">
        <Headings type="h4" text={title} />
        <span className="movieCard-info-year">{MovieYear}</span>
      </div>
      <p className="movieCard-genres">{ArrayToCommaList(genres)}</p>
    </div>
  );
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  openCloseModalEdit: PropTypes.func,
  openCloseModalDelete: PropTypes.func,
};
