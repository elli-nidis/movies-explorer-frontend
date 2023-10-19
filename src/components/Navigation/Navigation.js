import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import './Navigation.css';
import icon from '../../images/icon-account.svg';
function Navigation({isOpenedMenu, onOpenMenu, onCloseMenu}) {

  const location = useLocation();

  
  const [loggedIn, setLoggedIn] = React.useState(true);

  

  return (loggedIn ?
    (
      <nav className={`navigation navigation_logged  ${isOpenedMenu && "visible fixed"}`}>
        <ul className="menu menu_logged">
          <div className="menu__pages">
            {isOpenedMenu && (
              <li className="menu__item">
              <NavLink to="/" className={({isActive}) => `menu__link menu__link_logged ${(isActive && isOpenedMenu) ? "menu__link_active-opened-menu" : (isActive && !isOpenedMenu) ? "menu__link_active-closed-menu" : ""}`} onClick={onCloseMenu}>Главная</NavLink>
            </li>
            )}
            <li className="menu__item">
              <NavLink to="/movies" className={({isActive}) => `menu__link menu__link_logged ${(isActive && isOpenedMenu) ? "menu__link_active-opened-menu" : (isActive && !isOpenedMenu) ? "menu__link_active-closed-menu" : ""}`} onClick={onCloseMenu}>Фильмы</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/saved-movies" className={({isActive}) => `menu__link menu__link_logged ${(isActive && isOpenedMenu) ? "menu__link_active-opened-menu" : (isActive && !isOpenedMenu) ? "menu__link_active-closed-menu" : ""}`} onClick={onCloseMenu}>Сохранённые фильмы</NavLink>
            </li>
          </div>
          <div className="menu__account">
            <li className="menu__item">
              <NavLink to="/profile" className={({isActive}) => `menu__link menu__link_logged account__grid ${(isActive && isOpenedMenu) ? "menu__link_active-opened-menu" : (isActive && !isOpenedMenu) ? "menu__link_active-closed-menu" : ""}`} onClick={onCloseMenu}>
                Аккаунт
                <div className={`menu__icon-wrapper ${location.pathname === "/" && "menu__icon-wrapper_main-page-color"}`}>
                  <img src={icon} alt="иконка человек" className="menu__icon" />
                </div>
              </NavLink>
            </li>
          </div> 
      </ul> 
      <button className={`menu__button menu__button_open ${isOpenedMenu && "out"} hidden`} type="button" onClick={onOpenMenu}></button>
      <button className={`menu__button menu__button_close hidden ${isOpenedMenu && "visible"}`} type="button" onClick={onCloseMenu}></button>
      </nav>
    )
    : (
        <nav className="navigation navigation_unlogged">
          <ul className="menu menu_unlogged">
            <li className="menu__item menu__item_unlugged">
              <NavLink to="/signup" className="menu__link  menu__link_unlogged">Регистрация</NavLink>
            </li>
            <li className="menu__item menu__item_unlugged">
              <NavLink to="/signin" className="menu__link menu__link_unlogged">
                <button className="menu__signin-button" type="button">Войти</button>
              </NavLink>
            </li>
          </ul> 
        
      </nav>
    ));
}

export {Navigation};