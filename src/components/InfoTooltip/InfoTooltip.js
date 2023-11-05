import React from "react";
import "./InfoTooltip.css";
import successImg from "../../images/success.svg";
import failureImg from "../../images/failure.svg";

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_bground_half-dark ${props.isOpenPopup ? "popup_opened" : ""}`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
      <img className="popup__img"
        src={props.isSuccess ? successImg : failureImg}
        alt={props.infoTooltipParams.name}
      />
      <p className="popup__text">{props.infoTooltipParams.text}</p>
      <button
          className="popup__close-button close-button"
          type="button"
          onClick={props.onClose}
          aria-label="закрыть">
        </button>
      </div>
    </div>

// {props.isSuccess ? (
//   <>
//   <img
//     className="popup__signup-image"
//     src={`${successfully}`}
//     alt="Успешная регистрация"
//   />
//     <p className="popup__signup-title">
//       Успешная регистрация!
//     </p>
//   </>
// ) : (
//   <>
//   <img
//     className="popup__signup-image"
//     src={`${unsuccessfully}`}
//     alt="Что-то пошло не так"
//   />
//     <p className="popup__signup-title">
//       Что-то пошло не так. Попробуйте ещё раз!
//     </p>
//   </>
// )}

// <button
//   type="button"
//   className="popup__close-button"
//   onClick={props.onClose}
// ></button>

  );
}

export default InfoToolTip;
