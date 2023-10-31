import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";
import { EMAIL_ADRESS_REGEX } from "../../utils/constants";
import useForm from "../../hooks/useForm";

function Login({ onAuthorization, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  function getSubmitForm(event) {
    event.preventDefault();
    onAuthorization({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      formQuestionText="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
      isDisabledButton={!isFormValid}
      isLoading={isLoading}
      onSubmit={getSubmitForm}
      noValidate
    >
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

export default Login;
