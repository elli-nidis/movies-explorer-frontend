import React from "react";
import foto from "../../../images/ekaterina.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-block">
          <h3 className="about-me__subtitle">Екатерина</h3>
          <h4 className="about-me__info">Фронтенд-разработчик, 42&nbsp;года</h4>
          <p className="about-me__description">
            Я&nbsp;родилась и&nbsp;живу в&nbsp;Москве, закончила факультет
            экономики МБИ. Долгое время работала в&nbsp;клиентской поддержке.
            В&nbsp;последнее время стала интересоваться front-end разработкой.
            Хочу развиваться в&nbsp;этом направлении и&nbsp;стать достойным
            представителем профессии.
          </p>
          <a
            href="https://github.com/elli-nidis"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={foto} alt="мое фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
