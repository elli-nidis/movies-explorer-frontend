import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import { Navigation } from "../Navigation/Navigation";
import logo from '../../images/logo.svg';

function Header({isLoggedIn, handleLogOut, isOpenedMenu, onOpenMenu, onCloseMenu}) {
  
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === "/" && "header_main-page-color"}  ${isOpenedMenu && "cover"}`}>
      <div className="header__content">
        <Link to="/">
          <img src={logo} alt="логотип" className="header__logo" />
        </Link>
        {<Navigation isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} isOpenedMenu={isOpenedMenu} onOpenMenu={onOpenMenu} onCloseMenu={onCloseMenu}/>}
      </div>
    </header>
  );
}

export {Header};