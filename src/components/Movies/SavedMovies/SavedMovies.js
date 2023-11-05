import React, { useState, useEffect } from "react";
// import Header from "../../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

// import Footer from "../../Footer/Footer";
import {
  filterMovies,
  filterDurationMovies,
} from "../../../utils/utilsHelpers";

function SavedMovies({ loggedIn, savedMovies, onDeleteCard }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(
      isShortFilm ? filterDurationMovies(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortFilm, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  function getSearchMoviesData(query) {
    setSearchQuery(query);
  }

  function getShortToggleMovie() {
    setIsShortFilm(!isShortFilm);
  }

  return (
    <section className="movies">
      {/* <Header loggedIn={loggedIn} /> */}
      <SearchForm
        onFilterMovies={getShortToggleMovie}
        getSearchMoviesData={getSearchMoviesData}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
        isSavedFilms={true}
        cards={filteredMovies}
        isNotFound={isNotFound}
      />
      {/* <Footer /> */}
    </section>
  );
}

export default SavedMovies;
