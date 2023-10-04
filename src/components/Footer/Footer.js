import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <p className="footer__text">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
        <p className="footer__copyright">&copy;2023</p>
        <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
        <a href="https://github.com/" className="footer__link" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </section>
  );
}

export { Footer };