import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import account from "../../images/profile.svg";
import mobileMenu from "../../images/menu-button.svg";

function Header({ loggedIn }) {
  const [isClicked, setIsClicked] = React.useState(false);

  const setActiveLinkHeader = ({ isActive }) =>
    isActive ? "header__button_active" : "header__button";

  function handleOpenMobileMenu() {
    setIsClicked(true);
  }

  function handleCloseMobileMenu() {
    setIsClicked(false);
  }

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="form__logo">
            <img src={logo} alt="логотип сайта" />
          </Link>
          <div className="header__button-container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header header__gray" id="header-gray">
          <Link to="/" className="form__logo">
            <img src={logo} alt="логотип сайта" />
          </Link>
          <div className="header__button-container header__button-container_films">
            <NavLink to="/movies" className={setActiveLinkHeader}>
              Фильмы
            </NavLink>

            <NavLink to="/saved-movies" className={setActiveLinkHeader}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-container">
            <Link to="/profile" className="header__account-button">
              <img
                className="header__account-image"
                src={account}
                alt="изображение кнопки аккаунта"
              />
            </Link>
            <button className="header__menu-button" onClick={handleOpenMobileMenu}>
              <img src={mobileMenu} alt="меню" />
            </button>
          </div>
          {isClicked ? <Navigation handleCloseMobileMenu={handleCloseMobileMenu} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
