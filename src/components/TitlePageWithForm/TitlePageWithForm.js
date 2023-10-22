import React from "react";
import { useLocation } from "react-router-dom";
import './TitlePageWithForm.css';


function TitlePageWithForm({title}) {
  
  const location = useLocation();

  return (
    <h2 className={`title ${location.pathname === "/profile" && "title_center"}`}>{title}</h2>
  );
}

export {TitlePageWithForm};