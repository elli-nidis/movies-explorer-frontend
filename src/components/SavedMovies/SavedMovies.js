import React from "react";
import './SavedMovies.css';
import { SearchForm } from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";

function SavedMovies() {
  
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
    <section className="movies saved-movies">
      <SearchForm />
      {
        isLoading ? (<Preloader />)
        : (<MoviesCardList/>)
      }
    </section>
    <Footer />
    </>
  );;
}

export {SavedMovies};