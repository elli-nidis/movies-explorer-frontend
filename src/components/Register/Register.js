import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";
import { EMAIL_ADRESS_REGEX } from "../../utils/constants";
import useForm from "../../hooks/useForm";

function Register({ onRegister, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  function getSubmitForm(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      formQuestionText="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      isDisabledButton={!isFormValid}
      isLoading={isLoading}
      onSubmit={getSubmitForm}
    >
      <label className="form__label">
        Имя
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
          placeholder="имя"
          required
        />
        <span className="form__input-error">{errors.name}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          onChange={handleChangeInput}
          pattern={EMAIL_ADRESS_REGEX}
          value={enteredValues.email || ""}
          placeholder="почта"
          required
        />
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          minLength="4"
          maxLength="10"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
          placeholder="пароль"
          required
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
