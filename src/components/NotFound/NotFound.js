import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const path = useNavigate();

  const handleNavigate = () => {
    path(-2);
  };

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__descrintion">Страница не найдена</p>
      <button className="not-found__button" onClick={handleNavigate}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
