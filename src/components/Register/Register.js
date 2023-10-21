import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import './Register.css';
import { Form } from '../Form/Form';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { AlternativeAction } from '../AlternativeAction/AlternativeAction';
import { Logo } from '../Logo/Logo';


function Register() {
  const location = useLocation();
  const locationString = (location.pathname).match(/\w/gi).join("");
  const err = {message: ""};

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  return (
    <section className="register" aria-label="раздел регистрации">
      <FormWrapper>
        <>
          <Logo />
          <h2 className="register__title">Добро пожаловать!</h2>
          <Form 
            name = {`form-${locationString}`}
            clName = {locationString}
            textButton = {"Зарегистрироваться"}
          >
            <>
              <label htmlFor="input-name" className="form__label">
                Имя
                <input className="form__input" id="input-name" type="text" name="name" value={formValue.name} onChange={handleChange} required />
                <span className="form__error">{err.message || ""}</span>
              </label>
              <label htmlFor="input-email" className="form__label">
                E-mail
                <input className="form__input" id="input-email" type="email" name="email" value={formValue.email} onChange={handleChange} required />
                <span className="form__error">{err.message || ""}</span>
              </label>
              <label htmlFor="input-password" className="form__label">
                Пароль
                <input className={`form__input ${err.message && "form__input_error"}`} id="input-password" type="password" name="password" value={formValue.password} onChange={handleChange} required />
                <span className="form__error">{err.message || ""}</span>
              </label>
            </>
          </Form>       
        </>
      </FormWrapper>
      <AlternativeAction/>
    </section>
  );
}

export {Register};