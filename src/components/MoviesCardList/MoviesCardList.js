import React from "react";
// import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import { movies } from "../../utils/movies"


function MoviesCardList() {
  // const location = useLocation();

  return (
    <section className="movies-card-list" aria-label="раздел с фильмами">
      <ul className="movies-grid">
          {
            movies.map((movie) => {
              return <MoviesCard key={movie.id} movie={movie} />
            })
          }
        </ul>
    </section>
  );
}

export {MoviesCardList};