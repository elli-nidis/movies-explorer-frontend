import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './AlternativeAction.css';

function AlternativeAction({handleLogOut}) {
  const location = useLocation();
  const navigate = useNavigate();

  const alternativeActionDescription = location.pathname === "/profile" ? ""
  : location.pathname === "/signup" ? "Уже зарегистрированы? "
  : "Ещё не зарегистрированы? ";
  const textLink = location.pathname === "/profile" ? "Выйти из аккаунта"
  : location.pathname === "/signup" ? "Войти"
  : "Регистрация";

  function logOut(){
    localStorage.removeItem('token');
    handleLogOut();
    navigate('/', {replace: true});
  }

  return (
   <p className="alternative-action">
    {alternativeActionDescription}
    <Link to={
      location.pathname === "/profile" ? "/"
      : location.pathname === "/signup" ? "/signin"
      : "/signup"} 
      className={`alternative-action__link ${location.pathname === "/profile" ? "alternative-action__link_pink" : ""}`}
      onClick={`${location.pathname === "/profile" && logOut}`}>
      {textLink}
    </Link>
   </p>
  );
}

export {AlternativeAction};