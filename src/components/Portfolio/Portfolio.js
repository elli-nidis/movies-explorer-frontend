import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__links">
          <li className="portfolio__item">
            <p className="portfolio__text">Статичный сайт</p>
            <a href="https://github.com/elli-nidis/russian-travel.git" className="portfolio__link" target="_blank" rel="noopener noreferrer">
              <img src={arrow} alt="стрелка" className="portfolio__img" />
            </a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__text">Адаптивный сайт</p>
            <a href="https://github.com/elli-nidis/react-mesto-auth.git" className="portfolio__link" target="_blank" rel="noopener noreferrer">
              <img src={arrow} alt="стрелка" className="portfolio__img" />
            </a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__text">Одностраничное приложение</p>
            <a href="https://github.com/elli-nidis/react-mesto-api-full-gha.git" className="portfolio__link" target="_blank" rel="noopener noreferrer">
              <img src={arrow} alt="стрелка" className="portfolio__img" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export { Portfolio };