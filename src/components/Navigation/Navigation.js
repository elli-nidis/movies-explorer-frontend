import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
import icon from '../../images/icon-account.svg';

function Navigation() {

  return (
    <nav className="navigation">
      <ul className="menu">
        <div className="menu__pages">
          <li className="menu__item">
            <NavLink to="/movies" className="menu__link">Фильмы</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/saved-movies" className="menu__link">Сохранённые фильмы</NavLink>
          </li>
        </div>
        <div className="menu__account">
          <li className="menu__item">
            <NavLink to="/profile" className="menu__link">Аккаунт</NavLink>
          </li>
          <li className="menu__item menu__item_icon">
            <img src={icon} alt="иконка человек" className="menu__icon" />
          </li>
        </div>
    </ul>      
    </nav>
  );
}

export {Navigation};