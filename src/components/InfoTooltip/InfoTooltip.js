import React from "react";
import "./InfoTooltip.css";
import successImg from "../../images/success.svg";
import failureImg from "../../images/failure.svg";

function InfoTooltip(props) {
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
  );
}

export default InfoTooltip;
