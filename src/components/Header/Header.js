import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { Navigation } from "../Navigation/Navigation";
import logo from '../../images/logo.svg';

function Header({isLoggedIn, handleLogOut}) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img src={logo} alt="логотип" className="header__logo" />
        </Link>
       
        {<Navigation isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />}
      </div>
    </header>
  );
}

export {Header};