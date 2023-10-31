//Компонент Navigation представляет навигационное меню.
import React from "react";
import { Link, NavLink } from "react-router-dom";
import account from "../../images/profile.svg";
import "./Navigation.css";

function Navigation({ handleCloseMobileMenu }) {
  const setActiveLinkHeader = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link";

  return (
    <div className="navigation__page-overlay">
      <div className="navigation__overlay-container"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-button"
          onClick={handleCloseMobileMenu}
        ></button>
        <nav className="navigation__links">
          <NavLink to="/" className={setActiveLinkHeader}>
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            onClick={handleCloseMobileMenu}
            className={setActiveLinkHeader}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            onClick={handleCloseMobileMenu}
            className={setActiveLinkHeader}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          to="/profile"
          className="navigation__account-button"
          onClick={handleCloseMobileMenu}
        >
          <img src={account} alt="аккаунт" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
