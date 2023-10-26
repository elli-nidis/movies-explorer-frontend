import React from "react";
import { useLocation } from "react-router-dom";
import './Header.css';
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Logo/Logo";

function Header({isLoggedIn, handleLogOut, isOpenedMenu, onOpenMenu, onCloseMenu}) {
  
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === "/" ? "header_main-page-color" : ""}  ${isOpenedMenu ? "cover" : ""}`}>
      <div className="header__content">
        <Logo />
        {<Navigation isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} isOpenedMenu={isOpenedMenu} onOpenMenu={onOpenMenu} onCloseMenu={onCloseMenu} />}
      </div>
    </header>
  );
}

export {Header};