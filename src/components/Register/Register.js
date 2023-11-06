import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PageWithForm } from "../PageWithForm/PageWithForm";
import Form from '../Form/Form';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { TitlePageWithForm } from '../TitlePageWithForm/TitlePageWithForm';
import { AlternativeAction } from '../AlternativeAction/AlternativeAction';
import { Logo } from '../Logo/Logo';

import { EMAIL_ADRESS_REGEX } from "../../utils/constants";
import useForm from "../../hooks/useForm";

function Register({ onRegister, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  const location = useLocation();
  const locationString = (location.pathname).match(/\w/gi).join("");

   const navigate = useNavigate();

  function getSubmitForm(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  function goToLogin() {
    navigate('/signin');
  }

  return (
    <PageWithForm clName={locationString} ariaLabel="раздел регистрации">
      <FormWrapper>
        <>
          <Logo />
          <TitlePageWithForm title="Добро пожаловать!"/>
          <Form
            name = {`form-${locationString}`}
            clName = {locationString}
            textButton="Зарегистрироваться"
            isDisabledButton={!isFormValid}
            isLoading={isLoading}
            onSubmit={getSubmitForm}
          >
            <>
              <label htmlFor="name-input" className="form__label">
                Имя
                <input
                  name="name"
                  className="form__input"
                  id="name-input"
                  type="text"
                  onChange={handleChangeInput}
                  value={enteredValues.name || ""}
                  minLength="1"
                  maxLength="30"
                  placeholder="Введите имя"
                  required
                />
                <span className="form__error">{errors.name || ""}</span>
              </label>
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
      <AlternativeAction onClick={goToLogin}/>
    </PageWithForm>
  );
}

export default Register;
