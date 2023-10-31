import React from "react"
import NavTab from "../NavTab/NavTab"
import "./Promo.css"
import landingLogo from "../../../images/site-logo.svg"

//Компонент Promo представляет собой заглавный блок на странице.
// Компонент содержит информацию о проекте и его создателе.
// Верхняя часть компонента состоит из блока с текстом и изображения.
// Блок с текстом содержит заголовок и описание проекта.
// Нижняя часть компонента содержит навигационные вкладки, реализованные с помощью компонента NavTab.
function Promo() {
  return (
    <section className="promo" id="promo">
      <div className="promo__container">
        <div className="promo__text-block">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className="promo__image" src={landingLogo} alt="изображение" />

        <NavTab />
      </div>
    </section>
  )
}

export default Promo
