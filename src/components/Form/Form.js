import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({
  children,
  title,
  buttonText,
  formQuestionText,
  linkText,
  link,
  onSubmit,
  isDisabledButton,
  isLoading,
}) {
  return (
    <>
      <div className="form__container">
        <Link to="/" className="form__logo">
          <img src={logo} alt="логотип cайта" />
        </Link>
        <h3 className="form__title">{title}</h3>
        <form className="form" id="form" onSubmit={onSubmit} noValidate>
          {children}
          <button
            type="submit"
            disabled={isDisabledButton ? true : false}
            className={
              isDisabledButton || isLoading
                ? "form__button-save form__button-save_inactive"
                : "form__button-save"
            }
          >
            {buttonText}
          </button>
        </form>
        <p className="form__text">
          {formQuestionText}
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </p>
      </div>
    </>
  );
}

export default Form;
