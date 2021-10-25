import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import "../styles/layout.scss";
import "../styles/base.scss";
import SearchBar from "./search-bar/SearchBar";
import Headings from "./shared/headings/Headings";
import ButtonIcon from "./shared/buttons/button-icon/ButtonIcon";
import HeaderLogo from "../assets/images/netflixroulette.png";
import MovieCardsList from "./movie-cards-list/MovieCardsList";
import GenresNav from "./genresNav/GenresNav";
import { MoviesContext } from "../context/MoviesContext";
import Modal from "./shared/modal/Modal";
import AddMovieForm from "./add-movie-form/AddMovieForm";
import MovieDetails from "./movie-details/MovieDetails";
import { ReturnSelectedMovie } from "../utils/ReturnSelectedMovie";

export default function App() {
  const dataMovies = useFetchData("http://localhost:4000/movies");
  const [closeModal, setCloseModal] = useState(false);
  const [toggleMovieDetails, setToggleMovieDetails] = useState(false);
  const [movideDetailsId, setMovideDetailsId] = useState(null);

  function toggleModal() {
    setCloseModal(!closeModal);
  }
  function openMovideDetails(id) {
    setMovideDetailsId(id);
    setToggleMovieDetails(true);
  }

  return (
    <MoviesContext.Provider value={dataMovies}>
      {closeModal && (
        <Modal>
          <AddMovieForm toggleModal={toggleModal} />
        </Modal>
      )}
      <main className="container">
        {toggleMovieDetails ? (
          <header className="container-movieDetails">
            {
              <MovieDetails
                movie={ReturnSelectedMovie(movideDetailsId, dataMovies)}
                click={setToggleMovieDetails}
              />
            }
          </header>
        ) : (
          <header className="container-mainHeader">
            <div className="container-sections">
              <img src={HeaderLogo} alt="Netflix Roulette Logo" />
              <ButtonIcon text="Add Movie" click={toggleModal} />
            </div>
            <div className="container-searchbox">
              <Headings
                type="h1"
                text="Find your movie"
                styleAdjustment="container-searchbox-heading"
              />
              <SearchBar />
            </div>
          </header>
        )}

        <section className="container-moviesSection">
          <header className="container-moviesSection-header">
            <GenresNav />
          </header>
          <div className="container-moviesSection-list">
            <Headings
              type="h3"
              text={`${dataMovies.length} movies found`}
              styleAdjustment="container-moviesSection-list-heading"
            />
            <MovieCardsList movieDetails={openMovideDetails} />
          </div>
        </section>
      </main>
    </MoviesContext.Provider>
  );
}
