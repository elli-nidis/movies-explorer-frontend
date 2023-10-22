import React from "react";
import './PageWithForm.css';

function PageWithForm({clName, ariaLabel, ...props}) {

  return (
    <section className={`page-with-form ${clName}`} aria-label={ariaLabel}>
      {props.children}
    </section>
  );
}

export {PageWithForm};