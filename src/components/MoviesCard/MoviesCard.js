import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard({movie}) {

  const movieUrl = "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url;

  const [saved, setSaved] = React.useState(false);

  const location = useLocation();

  useEffect(() => {
    !movie.saved ? setSaved(false) : setSaved(true);
  }, [movie.saved]);

  function convertDurationToFullTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = hours > 0 ? (duration % (hours * 60)).toString() : (duration).toString();
    const fullMinutes = minutes.length > 1 ? minutes : "0" +  minutes;
    return `${hours}ч ${fullMinutes}м`;
  }

  function handleSaveMovie() {
    !saved ? setSaved(true) : setSaved(false);
  }

  return (
    <li className="movies-card">
      <figure className="movies-card__item">
        <figcaption className="movies-card__caption">
          <h2 className="movies-card__title">{movie.nameRU}</h2>      
          <p className="movies-card__duration">{convertDurationToFullTime(movie.duration)}</p>
        </figcaption>
        <img src={movieUrl} className="movies-card__img open-button" alt={`Обложка фильма ${movie.nameRU}`}/>
    </figure>
    {location.pathname === "/movies" && 
      (<button className={ `movies-card__button ${!saved ? "movies-card__button_save" : "movies-card__button_saved"}`}
        type="button" onClick={handleSaveMovie}></button>)}
    {location.pathname === "/saved-movies" &&
    (<button className="movies-card__button movies-card__button_delete" type="button"></button>)}
    </li>
  );
}

export {MoviesCard};