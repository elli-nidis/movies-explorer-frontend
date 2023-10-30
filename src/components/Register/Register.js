import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Register.css';
import { useFormWithValidation } from "../../utils/hooks/useForm";
import { PageWithForm } from "../PageWithForm/PageWithForm";
import { Form } from '../Form/Form';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { TitlePageWithForm } from '../TitlePageWithForm/TitlePageWithForm';
import { AlternativeAction } from '../AlternativeAction/AlternativeAction';
import { Logo } from '../Logo/Logo';
import * as auth from '../../utils/auth';


function Register({onRegister, handleLogin}) {

  const location = useLocation();
  const locationString = (location.pathname).match(/\w/gi).join("");

  const navigate = useNavigate();

  // const err = {message: ""};
  const { values, handleChange, errors, isValid, resetForm, isInputValid } = useFormWithValidation();

  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // });

  // const handleChange = (e) => {
  //   const {name, value} = e.target;

  //   setFormValue({
  //     ...formValue,
  //     [name]: value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = values;
    auth.register(name, email, password)
      .then(res => {
        if(res) {
          handleLogin(email, password);
          // auth.authorize(email, password);
          onRegister({imgLink: 'success', text: 'Вы успешно зарегистрировались!', name: 'Успешная регистрация'});
          navigate('/movies', {replace: true});
        }
        else onRegister({imgLink: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.', name: 'Неудачная регистрация'});
      });  
  };

  return (
    <PageWithForm clName={locationString} ariaLabel="раздел регистрации">
      <FormWrapper>
        <>
          <Logo />
          <TitlePageWithForm title="Добро пожаловать!"/>
          <Form 
            name = {`form-${locationString}`}
            clName = {locationString}
            textButton = {"Зарегистрироваться"}
            onSubmit={handleSubmit}
          >
            <>
              <label htmlFor="input-name" className="form__label">
                Имя
                <input className="form__input" id="input-name" type="text" name="name" value={values.name} onChange={handleChange} placeholder="Введите имя" minLength="1" maxLength="30" required />
                <span className="form__error">{errors.message || ""}</span>
              </label>
              <label htmlFor="input-email" className="form__label">
                E-mail
                <input className="form__input" id="input-email" type="email" name="email" value={values.email} onChange={handleChange} maxLength="30" placeholder="Введите e-mail" required />
                <span className="form__error">{errors.message || ""}</span>
              </label>
              <label htmlFor="input-password" className="form__label">
                Пароль
                <input className={`form__input ${errors.message ? "form__input_error" : ""}`} id="input-password" type="password" name="password" value={values.password} onChange={handleChange} placeholder="Введите пароль" minLength="8" maxLength="30" required />
                <span className="form__error">{errors.message || ""}</span>
              </label>
            </>
          </Form>       
        </>
      </FormWrapper>
      <AlternativeAction/>
    </PageWithForm>
  );
}

export {Register};