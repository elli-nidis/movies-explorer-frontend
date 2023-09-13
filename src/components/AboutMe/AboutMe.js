import React from "react";
import "./AboutMe.css";
import { SectionCaption } from "../SectionCaption/SectionCaption";
import photo from '../../images/ekaterina.png';

function AboutMe() {
  return (
    <section className="about-me">
      <SectionCaption name="Студент" />
      <div className="about-me__content">
        <h3 className="about-me__title">Екатерина</h3>
        <img src={photo} className="about-me__image" alt="фотография студента" />
        <p className="about-me__occupation">
        Фронтенд-разработчик, 42&nbsp;года
        </p>
        <p className="about-me__description">
        Я&nbsp;родилась и&nbsp;живу в&nbsp;Москве, закончила факультет экономики МБИ. Долгое 
        время работала в&nbsp;клиентской поддержке. В&nbsp;последнее время стала интересоваться 
        front-end разработкой. Хочу развиваться в&nbsp;этом направлении и&nbsp;стать достойным 
        представителем профессии.
        </p>
        <a href="#" className="about-me__link">Github</a>
      </div>
    </section>
  );
}

export { AboutMe };