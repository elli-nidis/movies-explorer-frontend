import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import {MoviesShowMoreButton} from "../MoviesShowMoreButton/MoviesShowMoreButton";
import { movies } from "../../utils/movies"


function MoviesCardList() {
  const location = useLocation();

  return (
    <section className="movies-card-list" aria-label="раздел с фильмами">
      <ul className="movies-grid">
        {location.pathname === "/movies" &&
          movies.map((movie) => {
            return (<MoviesCard key={movie.id} movie={movie} />)
          })
        }
        {location.pathname === "/saved-movies" &&
          movies.filter((movie) => movie.saved === true).map((movie) => {
            return (<MoviesCard key={movie.id} movie={movie} />)
          })
        }
      </ul>
      {location.pathname === "/movies" && (<MoviesShowMoreButton />)} 
    </section>
  );
}

export {MoviesCardList};