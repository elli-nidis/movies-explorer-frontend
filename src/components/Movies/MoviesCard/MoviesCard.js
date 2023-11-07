import React from "react";
import "./MoviesCard.css";
import { convertDurationToFullTime } from "../../../utils/utilsHelpers";

function MoviesCard({
  card,
  isSavedFilms,
  handleLikeFilm,
  onDeleteCard,
  saved,
  savedMovies,
}) {

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
    <li className="movies-card" key={card.id}>
      <figure className="movies-card__item">
        <figcaption className="movies-card__caption">
          <h2 className="movies-card__title">{card.nameRU}</h2>      
          <p className="movies-card__duration">{convertDurationToFullTime(card.duration)}</p>
        </figcaption>
        <a href={card.trailerLink} target="_blank" rel="noopener noreferrer">
          <img
            className="movies-card__img"
            alt={`Обложка фильма ${card.nameRU}`}
            src={
              isSavedFilms
                ? card.image
                : `https://api.nomoreparties.co/${card.image.url}`
            }
          />
        </a>
      </figure>
          {isSavedFilms ? (
            <button
              type="button"
              className="movies-card__button movies-card__button_delete"
              aria-label="удалить фильм"
              onClick={onDelete}
            ></button>
          ) : (
            <button
              type="button"
              className={`movies-card__button ${!saved ? "movies-card__button_save" : "movies-card__button_saved"}`}
              aria-label="сохранить фильм"
              onClick={onCardClick}
            ></button>
          )}
      </li>
  );
}

export default MoviesCard;
