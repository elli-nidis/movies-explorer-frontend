import React from "react";
import { useLocation } from "react-router-dom";
import './Form.css';

function Form({name, clName, textButton, onSubmit, isDisabledButton, isLoading, isLastValues, ...props}) {

  const location = useLocation();
  const err = {message: ""};

  return (
   <form name={name} className={`form form_${clName}`} id="form" onSubmit={onSubmit} autoComplete="off" noValidate>
    <div className={`form__labels-wrapper ${location.pathname === "/profile" ? "form__labels-wrapper_two-side-style" : ""}`}>
      {props.children}
    </div>
    <div className="form__button-wrapper">
      <p className="form__error-message">{err.message}</p>
      <button
        className={`form__button ${location.pathname === "/profile" ? "form__button_link-style" : ""} ${(isDisabledButton ?? isLoading ?? isLastValues) ? "form__button_disabled" : ""}`}
        aria-label={`кнопка ${textButton}`}
        type="submit"
        disabled={isDisabledButton}>
        {textButton}
      </button>
    </div>
   </form>
  );
}

export default Form;
