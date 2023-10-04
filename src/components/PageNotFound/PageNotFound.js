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
         <h2 className="not-found__title">404</h2>
         <p className="not-found__text">Страница не найдена</p>
       </div>
       <p className="not-found__link" onClick={goBack}>Назад</p>
    </section>
  );
}

export {PageNotFound};