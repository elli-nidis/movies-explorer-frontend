import React from "react";
import "./MoviesNotFound.css";

function MoviesNotFound() {
  return (
    <section className="movies-not-found" aria-label="Фильмы не найдены">
      <h2 className="movies-not-found__title">Фильмы не найдены</h2>
    </section>
  );
}

export { MoviesNotFound };