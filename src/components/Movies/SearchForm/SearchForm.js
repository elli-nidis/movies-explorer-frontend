import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

  useEffect(() => {
    if(query) {
      getSearchMoviesData(query);
    }
  }, [isShortFilm]);


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
      <form className="search__form" id="form" onSubmit={getSubmitForm} noValidate>
        <input
          name="query"
          className="search__box"
          id="search__box"
          type="text"
          placeholder={isQueryError ? "Нужно ввести ключевое слово" : "Фильм"}
          onChange={getCheckQueryInputForm}
          value={query || ""}
          minLength="1"
          required
        ></input>
        <button
          className="search__button-search"
          type="submit"
          aria-label="кнопка поиск"
        >
          Поиск
        </button>
        <label htmlFor="short-films" className="search__label-metrage" name="metrage" value="short-films">
          <input type="checkbox" className="search__checkbox-metrage" id="short-films" checked={isShortFilm} onChange={onFilterMovies}/>
          <span className="search__pseudo-item"></span>
          <span className="search__label-text">Короткометражки</span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
