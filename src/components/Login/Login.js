import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Login.css';
// import "../Form/Form.css";
// import Form from "../Form/Form";

import { PageWithForm } from "../PageWithForm/PageWithForm";
import Form from '../Form/Form';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { TitlePageWithForm } from '../TitlePageWithForm/TitlePageWithForm';
import { AlternativeAction } from '../AlternativeAction/AlternativeAction';
import { Logo } from '../Logo/Logo';

import { EMAIL_ADRESS_REGEX } from "../../utils/constants";
import useForm from "../../hooks/useForm";

function Login({ onAuthorization, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  const location = useLocation();
  const locationString = (location.pathname).match(/\w/gi).join("");

  const navigate = useNavigate();

  function getSubmitForm(event) {
    event.preventDefault();
    onAuthorization({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  function goToRegister() {
    navigate('/signup');
  }

  return (
    <PageWithForm clName={locationString} ariaLabel="раздел входа в аккаунт">
      <FormWrapper>
        <>
          <Logo />
          <TitlePageWithForm title="Рады видеть!"/>
          <Form 
            name = {`form-${locationString}`}
            clName = {locationString}
            textButton = "Войти"
            onSubmit={getSubmitForm}
            isDisabledButton={!isFormValid}
            isLoading={isLoading}
          >
            <>
              <label htmlFor="email-input" className="form__label">
                E-mail
                <input
                  name="email"
                  className="form__input"
                  id="email-input"
                  type="email"
                  onChange={handleChangeInput}
                  pattern={EMAIL_ADRESS_REGEX}
                  value={enteredValues.email || ""}
                  maxLength="30"
                  placeholder="Введите e-mail"
                  required
                />
                <span className="form__error">{errors.email || ""}</span>
              </label>
              <label htmlFor="password-input" className="form__label">
                Пароль
                <input
                  name="password"
                  className={`form__input ${errors.password ? "form__input_error" : ""}`}
                  id="password-input"
                  type="password"
                  onChange={handleChangeInput}
                  value={enteredValues.password || ""}
                  minLength="4"
                  maxLength="10"
                  placeholder="Введите пароль"
                  required
                />
                <span className="form__error">{errors.password || ""}</span>
              </label>
            </>
          </Form>
        </>
      </FormWrapper>
      <AlternativeAction onClick={goToRegister}/>
    </PageWithForm>    

    // <Form
    //   title="Рады видеть!"
    //   buttonText="Войти"
    //   formQuestionText="Еще не зарегистрированы?"
    //   linkText=" Регистрация"
    //   link="/signup"
    //   isDisabledButton={!isFormValid}
    //   isLoading={isLoading}
    //   onSubmit={getSubmitForm}
    //   noValidate
    // >
      // 
      // 
    // </Form>
  );
}

export default Login;
