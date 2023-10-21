import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import './Login.css';
import { PageWithForm } from "../PageWithForm/PageWithForm";
import { Form } from '../Form/Form';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { TitlePageWithForm } from '../TitlePageWithForm/TitlePageWithForm';
import { AlternativeAction } from '../AlternativeAction/AlternativeAction';
import { Logo } from '../Logo/Logo';


function Login() {
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
    <PageWithForm clName={locationString} ariaLabel="раздел входа в аккаунт">
      <FormWrapper>
        <>
          <Logo />
          <TitlePageWithForm title={"Рады видеть!"}/>
          <Form 
            name = {`form-${locationString}`}
            clName = {locationString}
            textButton = {"Войти"}
          >
            <>
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
    </PageWithForm>
  );
}

export {Login};