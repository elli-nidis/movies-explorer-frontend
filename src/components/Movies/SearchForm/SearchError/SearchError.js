import React from "react";
import "./SearchError.css";

function SearchError({ errorText }) {
  return (
    <section className="movies-not-found" aria-label="Фильмы не найдены">
      <h2 className="movies-not-found__title">{errorText}</h2>
    </section>
  );
  // return <p className="search__error search__error_center">{errorText}</p>;
}

export default SearchError;
