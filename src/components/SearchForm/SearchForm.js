import React from "react";
import './SearchForm.css';


function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input type="text" className="search__box" placeholder="Фильм" minLength="1" required/>
        <button className="search__button-search" type="button" aria-label="кнопка поиск">Поиск</button>
        <label htmlFor="short-films" className="search__label-metrage" name="metrage" value="short-films">
          <input type="checkbox" className="search__checkbox-metrage" id="short-films" />
          <span className="search__pseudo-item"></span>
          <span className="search__label-text">Короткометражки</span>
        </label>
      </form>
    </section>
  );
}

export {SearchForm};