import React from "react";
import { Link } from "react-router-dom";
import './Promo.css';
import globe from '../../images/promo-logo.svg';

function Promo() {

  return (
    <section className="promo" aria-label="Промо">
      <div className="promo__content">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={globe} className="promo__image" alt="Изображение глобуса" />
        <p className="promo__text">
        Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.
        </p>
        <a href="/#aboutProject" className="promo__link">
          <button
            className="promo__button"
            type="button"
            aria-label="узнать больше">
            Узнать больше
          </button>
        </a>
      </div>
    </section>
  );
}

export { Promo };