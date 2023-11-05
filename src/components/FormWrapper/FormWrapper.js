import React from "react";
import { useLocation } from "react-router-dom";
import './FormWrapper.css';

function FormWrapper({...props}) {

  const location = useLocation();

  return (
   <div className={`form-wrapper ${location.pathname === "/profile" ? "form-wrapper_profile" : ""}`}>
    {props.children}
   </div>
  );
}

export {FormWrapper};