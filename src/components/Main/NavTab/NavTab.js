import React from "react";
import "./NavTab.css";
import { Link } from "react-scroll";

//Компонент NavTab представляет собой навигационную вкладку.
function NavTab() {
  return (
    <nav className="nav-tab">
      <Link to="about" className="nav-tab__link" smooth={true} duration={700}>
        Узнать больше
      </Link>
    </nav>
  );
}

export default NavTab;
