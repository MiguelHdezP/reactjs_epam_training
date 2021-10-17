import React, { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import "./styles/layout.scss";
import "./styles/base.scss";
import SearchBar from "./components/search-bar/SearchBar";
import Headings from "./components/shared/headings/Headings";
import ButtonIcon from "./components/shared/buttons/button-icon/ButtonIcon";
import HeaderLogo from "./assets/images/netflixroulette.png";
import MovieCardsList from "./components/movie-cards-list/MovieCardsList";
import GenresNav from "./components/genresNav/GenresNav";
import { MoviesContext } from "./context/MoviesContext";
import Modal from "./components/shared/modal/Modal";
import AddMovieForm from "./components/add-movie-form/AddMovieForm";
import MovieDetails from "./components/movie-details/MovieDetails";
import { ReturnSelectedMovie } from "./utils/ReturnSelectedMovie";

export default function App() {
  const dataMovies = useFetchData("http://localhost:4000/movies");
  const [closeModal, setCloseModal] = useState(false);
  const [toggleMovieDetails, setToggleMovieDetails] = useState(false);
  const [movideDetailsId, setMovideDetailsId] = useState(null);

  //there is no need to do this, but I'm just practicing wrapping a bunch of useful functions and pass them on as object
  function actions() {
    function CloseModal() {
      setCloseModal(!closeModal);
    }
    function OpenMovideDetails(id) {
      setMovideDetailsId(id);
      setToggleMovieDetails(!toggleMovieDetails);
    }
    return { CloseModal, OpenMovideDetails };
  }

  return (
    <MoviesContext.Provider value={dataMovies}>
      {closeModal && (
        <Modal>
          <AddMovieForm actions={actions()} />
        </Modal>
      )}
      <main className="container">
        {toggleMovieDetails ? (
          <header className="container-movieDetails">
            {
              <MovieDetails
                movie={ReturnSelectedMovie(movideDetailsId, dataMovies)}
                click={actions().OpenMovideDetails}
              />
            }
          </header>
        ) : (
          <header className="container-mainHeader">
            <div className="container-sections">
              <img src={HeaderLogo} alt="Netflix Roulette Logo" />
              <ButtonIcon text="Add Movie" click={actions().CloseModal} />
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
            <MovieCardsList movieDetails={actions().OpenMovideDetails} />
          </div>
        </section>
      </main>
    </MoviesContext.Provider>
  );
}
