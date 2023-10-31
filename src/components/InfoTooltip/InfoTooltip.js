import React from "react";
import "./InfoTooltip.css";
import successfully from "../../images/successfully.svg";
import unsuccessfully from "../../images/unsuccessfully.svg";

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpenPopup ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isSuccess ? (
          <>
          <img
            className="popup__signup-image"
            src={`${successfully}`}
            alt="Успешная зарегистрация"
          />
            <p className="popup__signup-title">
              Успешная зарегистрация!
            </p>
          </>
        ) : (
          <>
          <img
            className="popup__signup-image"
            src={`${unsuccessfully}`}
            alt="Что-то пошло не так"
          />
            <p className="popup__signup-title">
              Что-то пошло не так. Попробуйте ещё раз!
            </p>
          </>
        )}

        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoToolTip;
