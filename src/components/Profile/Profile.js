import React from "react";
// import { Link } from "react-router-dom";
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Header } from "../Header/Header";
import {AlternativeAction} from "../AlternativeAction/AlternativeAction";


function Profile({isOpenedMenu, onOpenMenu, onCloseMenu}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
    <Header isOpenedMenu={isOpenedMenu} onOpenMenu={onOpenMenu} onCloseMenu={onCloseMenu} />
    <section className="movies">
    <AlternativeAction />
    </section>
    </>
  );
}

export {Profile};