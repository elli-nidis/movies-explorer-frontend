import React from "react";
// import { useLocation } from "react-router-dom";
import './FormWrapper.css';

function FormWrapper({...props}) {

  // const location = useLocation();

  return (
   <div className="form-wrapper">
    {props.children}
   </div>
  );
}

export {FormWrapper};