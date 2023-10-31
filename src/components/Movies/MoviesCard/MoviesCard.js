import React from "react";
import "./MoviesCard.css";
import { durationConverterMovies } from "../../../utils/utilsHelpers";

function MoviesCard({
  card,
  isSavedFilms,
  handleLikeFilm,
  onDeleteCard,
  saved,
  savedMovies,
}) {
  const cardLikeButtonClassName = `${
    saved ? "moviesCard__button moviesCard__button_saved" : "moviesCard__button"
  }`;

  function onCardClick() {
    if (saved) {
      onDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeFilm(card);
    }
  }

  function onDelete() {
    onDeleteCard(card);
  }

  return (
    <>
      <article className="moviesCard" key={card.id}>
        <div className="moviesCard__caption">
          <h2 className="moviesCard__text">{card.nameRU}</h2>
          <span className="moviesCard__duration">
            {durationConverterMovies(card.duration)}
          </span>
        </div>

        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="moviesCard__image"
            alt={card.nameRU}
            src={
              isSavedFilms
                ? card.image
                : `https://api.nomoreparties.co/${card.image.url}`
            }
          />
        </a>

        <div className="moviesCard__save-container">
          {isSavedFilms ? (
            <button
              type="button"
              className="moviesCard__button_delete"
              onClick={onDelete}
            ></button>
          ) : (
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={onCardClick}
            ></button>
          )}
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
