import React from "react";
import { useLocation } from "react-router-dom";
import './Form.css';

function Form({name, clName, textButton, onSubmit, ...props}) {

  const location = useLocation();
  const err = {message: ""};

  return (
   <form name={name} className={`form form_${clName}`} onSubmit={onSubmit} autoComplete="off" noValidate>
    <div className={`form__labels-wrapper ${location.pathname === "/profile" ? "form__labels-wrapper_two-side-style" : ""}`}>
      {props.children}
    </div>
    <div className="form__button-wrapper">
      <p className="form__error-message">{err.message}</p>
      <button
        className={`form__button ${location.pathname === "/profile" ? "form__button_link-style" : ""}`}
        aria-label={`кнопка ${textButton}`}
        type="submit">
        {textButton}
      </button>
    </div>
   </form>
  );
}

export {Form};