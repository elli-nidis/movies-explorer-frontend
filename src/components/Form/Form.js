import React from "react";
// import { Link, useLocation } from "react-router-dom";
import './Form.css';

function Form({children}) {

  return (
   <form className="form">
    {children}
    <button></button>
   </form>
  );
}

export {Form};