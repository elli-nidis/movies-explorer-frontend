import React from "react";
import './Promo.css';
// import { NavTab } from '../NavTab/NavTab';
import globe from '../../images/promo-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={globe} className="promo__image" alt="Изображение глобуса" />
        <p className="promo__text">
        Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.
        </p>
        <button
          className="promo__button"
          type="button"
          /* onClick={} */
          aria-label="узнать больше">
          Узнать больше
        </button>
      </div>
    </section>
  );
}

export { Promo };