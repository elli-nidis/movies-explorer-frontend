import React from "react";
import { useLocation } from "react-router-dom";
import './TitlePageWithForm.css';


function TitlePageWithForm({title}) {
  
  const location = useLocation();

  return (
    <h1 className={`title ${location.pathname === "/profile" ? "title_center" : ""}`}>{title}</h1>
  );
}

export {TitlePageWithForm};
