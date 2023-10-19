import React from "react";
import './SavedMovies.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";

function SavedMovies({isOpenedMenu, onOpenMenu, onCloseMenu}) {
  
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
    <Header isOpenedMenu={isOpenedMenu} onOpenMenu={onOpenMenu} onCloseMenu={onCloseMenu} />
    <section className="movies">
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