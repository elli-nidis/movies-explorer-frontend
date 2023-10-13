import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard({movie}) {

  const location = useLocation();
  const [saved, setSaved] = React.useState(false);
  
  const movieUrl = "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url;
  const hours = Math.floor(movie.duration / 60);
  const minutes = hours > 0 ? (movie.duration % (hours * 60)).toString() : (movie.duration).toString();
  const fullMinutes = minutes.length > 1 ? minutes : "0" +  minutes;

  function handleSaveMovie() {
    setSaved(true);
  }

  return (
    <li className="movies-card">
      <figure className="movies-card__item">
        <figcaption className="movies-card__caption">
          <h2 className="movies-card__title">{movie.nameRU}</h2>      
          <p className="movies-card__duration">{hours}ч {fullMinutes}м</p>
        </figcaption>
        <img src={movieUrl} className="movies-card__img open-button" alt="обложка фильма"/>
    </figure>
    <button className="movies-card__button movies-card__button_save" type="button" onClick={handleSaveMovie}></button>
    </li>
  );
}

export {MoviesCard};