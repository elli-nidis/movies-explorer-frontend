import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";
// import Header from "../../Header/Header";
import useForm from "../../hooks/useForm";


import { PageWithForm } from "../PageWithForm/PageWithForm";
import Form from '../Form/Form';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { TitlePageWithForm } from '../TitlePageWithForm/TitlePageWithForm';
import { AlternativeAction } from '../AlternativeAction/AlternativeAction';

import { useLocation } from "react-router-dom";


import { EMAIL_ADRESS_REGEX } from "../../utils/constants";

// Компонент Profile представляет страницу профиля пользователя.
function Profile({ isLoading, signOut, onUpdateUser, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const location = useLocation();
  const locationString = (location.pathname).match(/\w/gi).join("");

  const { enteredValues, errors, handleChangeInput, isFormValid, resetForm } =
    useForm();

  // Состояние для отслеживания изменений в значениях полей формы
  const [isLastValues, setIsLastValues] = useState(false);

  // Сброс формы при обновлении текущего пользователя
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  // Обработка отправки формы
  function getSubmitForm(e) {
    e.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  // Проверка, являются ли текущие значения полей формы последними сохраненными значениями
  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValues]);

  return (
    <>
      {/* <Header loggedIn={loggedIn} /> */}
      {/* <section className="profile"> */}
      <PageWithForm clName={locationString} ariaLabel="раздел профиля">
        <FormWrapper>
          <>
            <TitlePageWithForm title={`Привет, ${currentUser.name}!`} />
            <Form
              id="form"
              // className="profile__form"
              clName = {locationString}
              onSubmit={getSubmitForm}
              textButton = "Редактировать"
              isDisabledButton={!isFormValid || isLastValues}
              isLastValues={isLastValues}
              isLoading={isLoading}
            >
              <>
                <label htmlFor="name-input" className="form__label form__label_two-side-style">
                  <span className="form__label-text">Имя</span>
                  <input
                    name="name"
                    className="form__input form__input_right-side"
                    id="name-input"
                    type="text"
                    minLength="1"
                    maxLength="30"
                    required
                    placeholder="Введите имя"
                    onChange={handleChangeInput}
                    value={enteredValues.name || ""}
                  />
                  <span className="form__error">{errors.name}</span>
                </label>
                <label htmlFor="email-input" className="form__label form__label_two-side-style">
                  <span className="form__label-text">E-mail</span>
                  <input
                    name="email"
                    className="form__input form__input_right-side"
                    id="email-input"
                    type="email"
                    maxLength="30"
                    placeholder="Введите e-mail"
                    onChange={handleChangeInput}
                    pattern={EMAIL_ADRESS_REGEX}
                    value={enteredValues.email || ""}
                    required
                  />
                  <span className="form__error">{errors.email}</span>
                </label>
              </>
            </Form>
          </>
        </FormWrapper>
        <AlternativeAction onClick={signOut} />
      </PageWithForm>

        {/* <h1 className="profile__title">Привет, {currentUser.name}!</h1> */}
        
          

          {/* <div className="profile__border"></div> */}
          
          {/* <button
            type="submit"
            disabled={!isFormValid ? true : false}
            className={
              !isFormValid || isLoading || isLastValues
                ? "profile__button-save form__button-save_inactive"
                : "profile__button-save"
            }
          >
            Редактировать
          </button> */}

          {/* <button type="button" className="profile__exit" onClick={signOut}>
            Выйти из аккаунта
          </button> */}
        {/* </form> */}
      {/* </section> */}
    </>
  );
}

export default Profile;
