import React from "react";
import "./GenresNav.scss";

export default function GenresNav() {
  return (
    <nav className="genresNav">
      <div className="genresNav-activeBar"></div>
      <ul className="genresNav-menu">
        <li className="genresNav-menu-active">All</li>
        <li>Documentary</li>
        <li>Comedy</li>
        <li>Horror</li>
        <li>Crime</li>
      </ul>
      <div className="genresNav-filter">
        <span>Sort By</span>
        <div className="genresNav-filter-options">
          Release date{" "}
          <span className="genresNav-filter-options-downArrow"></span>
        </div>
      </div>
    </nav>
  );
}
