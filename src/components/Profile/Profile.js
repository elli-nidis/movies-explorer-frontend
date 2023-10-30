import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import './Profile.css';
import { PageWithForm } from "../PageWithForm/PageWithForm";
import { Form } from '../Form/Form';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { TitlePageWithForm } from '../TitlePageWithForm/TitlePageWithForm';
import { AlternativeAction } from '../AlternativeAction/AlternativeAction';


function Profile({handleLogOut}) {

  const location = useLocation();
  const locationString = (location.pathname).match(/\w/gi).join("");

  const err = {message: ""};

  const [formValue, setFormValue] = useState({
    name: "Пользователь123",
    email: "123@ya.ru",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  return (
    <>
    <PageWithForm clName={locationString} ariaLabel="раздел профиля">
      <FormWrapper>
        <>
          <TitlePageWithForm title={`Привет, ${"Виталий"}!`}/>
          <Form 
            name = {`form-${locationString}`}
            clName = {locationString}
            textButton = {"Редактировать"}
          >
            <>
              <label htmlFor="input-name" className="form__label form__label_two-side-style">
                <span className="form__label-text">Имя</span>
                <input className="form__input form__input_right-side" id="input-name" type="text" name="name" value={formValue.name} onChange={handleChange} placeholder="Введите имя" minLength="1" maxLength="30" />
                <span className="form__error">{err.message || ""}</span>
              </label>
              <label htmlFor="input-email" className="form__label form__label_two-side-style">
                <span className="form__label-text">E-mail</span>
                <input className="form__input form__input_right-side" id="input-email" type="email" name="email" value={formValue.email} onChange={handleChange} maxLength="30" placeholder="Введите e-mail" />
                <span className="form__error">{err.message || ""}</span>
              </label>
            </>
          </Form>       
        </>
      </FormWrapper>
      <AlternativeAction handleLogOut={handleLogOut}/>
    </PageWithForm>
    </>
  );
}

export {Profile};