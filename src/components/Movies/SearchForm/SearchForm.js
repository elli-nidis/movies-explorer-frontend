import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ getSearchMoviesData, onFilterMovies, isShortFilm }) {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isQueryError, setIsQueryError] = useState(false);

  function getSubmitForm(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      getSearchMoviesData(query);
    }
  }

  function getCheckQueryInputForm(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localQuery = localStorage.getItem("movieSearch");
      setQuery(localQuery);
    }
  }, [location]);

  return (
    <section className="search">
      <form className="search__form" id="form" onSubmit={getSubmitForm}>
        <input
          name="query"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          onChange={getCheckQueryInputForm}
          value={query || ""}
        ></input>

        <button className="search__button" type="submit">
          Поиск
        </button>
      </form>

      <FilterCheckbox
        isShortFilm={isShortFilm}
        onFilterMovies={onFilterMovies}
      />

      {isQueryError && (
        <span className="search__form-error">Нужно ввести ключевое слово</span>
      )}

      <div className="search__border-bottom"></div>
    </section>
  );
}

export default SearchForm;
