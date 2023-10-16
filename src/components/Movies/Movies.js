import React from "react";
import './Movies.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";


function Movies() {

  const [isLoading, setIsLoading] = React.useState(false);

  function handleSearchButton() {
    setIsLoading(true);
  }


  return (
    <>
    <Header />
    <section className="movies">
      <SearchForm />
      {
        isLoading ? (<Preloader />)
        : (<MoviesCardList/>)
      }
    </section>
    <Footer />
    </>
  );
}

export {Movies};