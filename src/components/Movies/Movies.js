import React from "react";
import './Movies.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { MoviesNotFound } from "../MoviesNotFound/MoviesNotFound";
import { Footer } from "../Footer/Footer";


function Movies({isOpenedMenu, onOpenMenu, onCloseMenu}) {

  const [isLoading, setIsLoading] = React.useState(false);
  const [successfulSearch, setSuccessfulSearch] = React.useState(true);

  return (
    <>
    <Header isOpenedMenu={isOpenedMenu} onOpenMenu={onOpenMenu} onCloseMenu={onCloseMenu} />
    <section className="movies">
      <SearchForm />
      {
        isLoading ? (<Preloader />)
        : successfulSearch ? (<>
          <MoviesCardList />
          </>)
        : (<MoviesNotFound/>)
      }
    </section>
    <Footer />
    </>
  );
}

export {Movies};