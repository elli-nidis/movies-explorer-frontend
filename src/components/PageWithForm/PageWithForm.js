import React, {useState} from "react";
import './PageWithForm.css';
import { Form } from '../Form/Form';


function PageWithForm({clName, ariaLabel, ...props}) {

  return (
    <section className={`page-with-form ${clName}`} aria-label={ariaLabel}>
      {props.children}
    </section>
  );
}

export {PageWithForm};