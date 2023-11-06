import React from "react";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import { filterMovies, filterDurationMovies } from "../../utils/utilsHelpers";
import * as movies from "../../utils/MoviesApi";

function Movies({ loggedIn, handleLikeFilm, onDeleteCard, savedMovies }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [initialCardsMovies, setInitialCardsMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isShortFilm, setIsShortFilm] = React.useState(false);
  const [isReqError, setIsReqError] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialCardsMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDurationMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    } else {
      // setIsNotFound(true);
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setIsShortFilm(true);
    } else {
      setIsShortFilm(false);
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  function getEditMoviesFiltered(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short);
    setInitialCardsMovies(moviesCardList);
    setFilteredMovies(
      short ? filterDurationMovies(moviesCardList) : moviesCardList
    );
    localStorage.setItem("movies", JSON.stringify(moviesCardList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  function getShortToggleMovie() {
    setIsShortFilm(!isShortFilm);
    if (!isShortFilm) {
      if (filterDurationMovies(initialCardsMovies).length === 0) {
        setFilteredMovies(filterDurationMovies(initialCardsMovies));
      } else {
        setFilteredMovies(filterDurationMovies(initialCardsMovies));
      }
    } else {
      setFilteredMovies(initialCardsMovies);
    }
    localStorage.setItem("shortMovies", !isShortFilm);
  }

  function getSearchMoviesData(query) {
    localStorage.setItem("movieSearch", query);
    localStorage.setItem("shortMovies", isShortFilm);

    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      getEditMoviesFiltered(movies, query, isShortFilm);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((moviesData) => {
          getEditMoviesFiltered(moviesData, query, isShortFilm);
          setIsReqError(false);
        })
        .catch((err) => {
          setIsReqError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  return (
    <section className="movies">
      <SearchForm
        onFilterMovies={getShortToggleMovie}
        isShortFilm={isShortFilm}
        getSearchMoviesData={getSearchMoviesData}
      />
      <MoviesCardList
        cards={filteredMovies}
        isLoading={isLoading}
        isSavedFilms={false}
        savedMovies={savedMovies}
        handleLikeFilm={handleLikeFilm}
        onDeleteCard={onDeleteCard}
        isReqError={isReqError}
        isNotFound={isNotFound}
      />
    </section>
  );
}

export default Movies;
