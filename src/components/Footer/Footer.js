import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
        </p>
        <p className="footer__copyright">&copy;2023</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://github.com/elli-nidis"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
