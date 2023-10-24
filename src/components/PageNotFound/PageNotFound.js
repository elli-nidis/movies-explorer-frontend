import React from "react";
import { useNavigate  } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
}

  return (
    <section className="not-found">
       <div className="not-found__info">
         <h1 className="not-found__title">404</h1>
         <p className="not-found__text">Страница не найдена</p>
       </div>
       <button className="not-found__button" type="button" aria-label="кнопка назад" onClick={goBack}>Назад</button>
    </section>
  );
}

export {PageNotFound};