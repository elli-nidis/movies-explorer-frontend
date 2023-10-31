import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../SearchForm/SearchError/SearchError";
import Preloader from "../../Preloader/Preloader";
import { ERROR_TEXT_SERVER, ERROR_TEXT } from "../../../utils/constants";

function MoviesCardList({
  cards,
  isLoading,
  isSavedFilms,
  savedMovies,
  isReqError,
  isNotFound,
  handleLikeFilm,
  onDeleteCard,
}) {
  const [shownMovies, setShownMovies] = useState(0);

  function handleSavedMovies(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  function handleWithDisplayMovieCounter() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(12);
    } else if (display > 767) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  function handleAddWithDisplayMovieClick() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(shownMovies + 3);
    } else if (display > 767) {
      setShownMovies(shownMovies + 2);
    } else {
      setShownMovies(shownMovies + 2);
    }
  }

  const { pathname } = useLocation();

  React.useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleWithDisplayMovieCounter);
    }, 500);
    return () => {
      window.removeEventListener("resize", handleWithDisplayMovieCounter);
    };
  });

  useEffect(() => {
    handleWithDisplayMovieCounter();
  }, [cards]);

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <SearchError errorText={ERROR_TEXT} />}
      {isReqError && !isLoading && (
        <SearchError errorText={ERROR_TEXT_SERVER} />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={handleSavedMovies(savedMovies, card)}
                    cards={cards}
                    card={card}
                    handleLikeFilm={handleLikeFilm}
                    onDeleteCard={onDeleteCard}
                    isSavedFilms={isSavedFilms}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-container"></div>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={handleSavedMovies(savedMovies, card)}
                    cards={cards}
                    card={card}
                    handleLikeFilm={handleLikeFilm}
                    onDeleteCard={onDeleteCard}
                    isSavedFilms={isSavedFilms}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-container">
                {cards.length > shownMovies ? (
                  <button
                    className="cards__button"
                    onClick={handleAddWithDisplayMovieClick}
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
