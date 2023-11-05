import React from "react";
import { useLocation } from "react-router-dom";
import './AlternativeAction.css';

function AlternativeAction({onClick}) {
  const location = useLocation();
  // const navigate = useNavigate();

  const alternativeActionDescription = location.pathname === "/profile" ? ""
  : location.pathname === "/signup" ? "Уже зарегистрированы? "
  : "Ещё не зарегистрированы? ";
  const textLink = location.pathname === "/profile" ? "Выйти из аккаунта"
  : location.pathname === "/signup" ? "Войти"
  : "Регистрация";

  // function logOut(){
  //   localStorage.removeItem('token');
  //   handleLogOut();
  //   navigate('/', {replace: true});
  // }

  return (
   <p className="alternative-action">
    {alternativeActionDescription}
    <button
      className={`alternative-action__link ${location.pathname === "/profile" ? "alternative-action__link_pink" : ""}`}
      onClick={onClick}
      >
      {textLink}
    </button>
   </p>

//   <p className="alternative-action">
//     {alternativeActionDescription}
//     <button
//       className={`alternative-action__button ${location.pathname === "/profile" ? "alternative-action__button_pink" : ""}`}
//       aria-label={`кнопка ${textButton}`}
//       type="button"
//       onClick={`${location.pathname === "/profile" ? logOut
//       : location.pathname === "/signup" ? navigate("/signin")
//       : navigate("/signup")}`}
//       >
//       {textButton}
//     </button>
//  </p>
  );
}

export {AlternativeAction};