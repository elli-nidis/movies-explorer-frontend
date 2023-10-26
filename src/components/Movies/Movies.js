import React from "react";
import './Movies.css';
import { SearchForm } from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { MoviesNotFound } from "../MoviesNotFound/MoviesNotFound";
import { Footer } from "../Footer/Footer";


function Movies() {

  const [isLoading, setIsLoading] = React.useState(false);
  const [successfulSearch, setSuccessfulSearch] = React.useState(true);

  return (
    <>
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