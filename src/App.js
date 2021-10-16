import React, { useEffect, useState } from "react";
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

export default function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      const URL = "http://localhost:4000/movies";
      try {
        const response = await fetch(URL);
        const movies = await response.json();
        setDataMovies(movies.data);
      } catch (err) {
        alert(err);
      }
    }

    fetchMovies();
  }, []);

  //there is no need to do this, but I'm just practicing wrapping a bunch of useful functions and pass them on as object
  function actions() {
    function CloseModal() {
      setCloseModal(!closeModal);
    }
    return { CloseModal };
  }

  return (
    <MoviesContext.Provider value={dataMovies}>
      {closeModal && (
        <Modal>
          <AddMovieForm actions={actions()} />
        </Modal>
      )}
      <main className="container">
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
            <MovieCardsList />
          </div>
        </section>
      </main>
    </MoviesContext.Provider>
  );
}
