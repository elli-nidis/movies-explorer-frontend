import React from "react";
import "../InfoTooltip/InfoTooltip.css";
import successfully from '../../images/successfully.svg';
import unsuccessfully from '../../images/unsuccessfully.svg';

function InfoToolTipUpdate(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpenPopup ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isUpdate ? (
          <>
           <img
              className="popup__signup-image"
              src={`${successfully}`}
              alt="Успешное редактирование"
            />
            <p className="popup__signup-title">
              Успешное редактирование!
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

export default InfoToolTipUpdate;
