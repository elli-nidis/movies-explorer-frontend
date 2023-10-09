import React from "react";
import "./Techs.css";
import { SectionCaption } from "../SectionCaption/SectionCaption";

function Techs() {
  return (
    <section className="techs">
      <SectionCaption name="Технологии" modifier="section-caption__title_dark"/>
      <div className="techs__content">
        <h3 className="techs__content-title">7&nbsp;технологий</h3>
        <p className="techs__content-text">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, 
        которые применили в&nbsp;дипломном проекте.
        </p>
        <ul className="techs__stack">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export { Techs };