import React from "react";
import { Link, useLocation } from "react-router-dom";
import './AlternativeAction.css';

function AlternativeAction() {
  const location = useLocation();
  const alternativeActionDescription = location.pathname === "/profile" ? ""
  : location.pathname === "/signup" ? "Уже зарегистрированы? "
  : "Ещё не зарегистрированы? ";
  const textLink = location.pathname === "/profile" ? "Выйти из аккаунта"
  : location.pathname === "/signup" ? "Войти"
  : "Регистрация";

  return (
   <p className="alternative-action">
    {alternativeActionDescription}
    <Link to={
      location.pathname === "/profile" ? "/"
      : location.pathname === "/signup" ? "/signin"
      : "/signup"} 
      className={`alternative-action__link ${location.pathname === "/profile" && "alternative-action__link_pink"}`}>
      {textLink}
    </Link>
   </p>
  );
}

export {AlternativeAction};