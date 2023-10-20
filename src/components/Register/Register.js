// import React from "react";
// import { Link } from "react-router-dom";
import './Register.css';
import { Form } from '../Form/Form';
import { AlternativeAction } from '../AlternativeAction/AlternativeAction';
import { Logo } from '../Logo/Logo';


function Register() {
  return (
    <section className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <Form />
      <AlternativeAction/>
    </section>
  );
}

export {Register};