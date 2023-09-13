import React from "react";
import './AboutProject.css';
import { SectionCaption } from "../SectionCaption/SectionCaption";


function AboutProject() {
  return (
    <section className="about-project">
      <SectionCaption name="О проекте" />
      <div className="about-project__content">
        <h3 className="about-project__content-title">Дипломный проект включал 5&nbsp;этапов</h3>
        <h3 className="about-project__content-title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
        <p className="about-project__content-text">
          Составление плана, работу над бэкендом, 
          вёрстку, добавление функциональности и&nbsp;финальные доработки.
        </p>
        <p className="about-project__content-text">
          У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые 
          нужно было соблюдать, чтобы успешно защититься.
        </p>
        <div className="about-project__timeline">
          <div className="about-project__inscription">1&nbsp;неделя</div>
          <div className="about-project__inscription">4&nbsp;недели</div>
          <div className="about-project__label">Back-end</div>
          <div className="about-project__label">Front-end</div>
        </div>

      </div>
    </section>
  );
}

export { AboutProject };