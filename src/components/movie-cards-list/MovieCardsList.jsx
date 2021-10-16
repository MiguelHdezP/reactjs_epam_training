import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import "./MovieCardsList.scss";
import MovieCard from "../movie-card/MovieCard";
import ErrorBoundary from "../shared/error-handling/ErrorBoundary";
import Modal from "../shared/modal/Modal";
import DeleteMovieForm from "../delete-movie-form/DeleteMovieForm";
import EditMovieForm from "../edit-movie-form/EditMovieForm";

export default function MovieCardsList() {
  const movieList = useContext(MoviesContext);
  const [toggleModalDelete, setToggleModalDelete] = useState(false);
  const [toggleModalEdit, setToggleModalEdit] = useState(false);

  function openCloseModalDelete() {
    setToggleModalDelete(!toggleModalDelete);
  }
  function openCloseModalEdit() {
    setToggleModalEdit(!toggleModalEdit);
    console.log("Chito: ", toggleModalEdit);
  }

  return (
    <>
      {toggleModalDelete && (
        <Modal>
          <DeleteMovieForm click={openCloseModalDelete} />
        </Modal>
      )}
      {toggleModalEdit && (
        <Modal>
          <EditMovieForm click={openCloseModalEdit} />
        </Modal>
      )}
      <ul className="movieCardsList">
        {movieList &&
          movieList.map((elem, index) => {
            let { id, poster_path, title, release_date, genres } = elem;
            // uncomment this snippet to activate ErrorBoundary
            /*if (title === "Coco") {
            title = 5;
            console.log("poster: ", title);
          }*/
            return (
              <li key={id}>
                <ErrorBoundary>
                  <MovieCard
                    imagePath={poster_path}
                    title={title}
                    date={release_date}
                    genres={genres}
                    openCloseModalEdit={openCloseModalEdit}
                    openCloseModalDelete={openCloseModalDelete}
                  />
                </ErrorBoundary>
              </li>
            );
          })}
      </ul>
    </>
  );
}
//the application is running twice that is why I declare the type as follows, however I prefer the second option

MovieCardsList.propTypes = {
  movieList: PropTypes.array,
};

/*
MovieCardsList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.string),
};
*/
