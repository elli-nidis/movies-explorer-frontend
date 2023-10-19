import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import './App.css';
import '../Cover/Cover.css';
import { Header } from '../Header/Header';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Footer } from '../Footer/Footer';

function App() {

  
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [openedMenu, setOpenedMenu] = React.useState(false);

  // function handleLogin(email) {
  //   setLoggedIn(true);
  // }

  function handleLogOut() {
    setLoggedIn(false);
  }

  function openMenu() {
    setOpenedMenu(true);
  }

  function closeMenu() {
    setOpenedMenu(false);
  }

  return (
    <div className={`page ${openedMenu && "cover"}`}>
      {/* <Header
        isLoggedIn={loggedIn}
        handleLogOut={handleLogOut}
      /> */}
      <Routes>
        <Route path="/" element={
           <>
            <Header
              isLoggedIn={loggedIn}
              handleLogOut={handleLogOut}
              isOpenedMenu={openedMenu}
              onOpenMenu={openMenu}
              onCloseMenu={closeMenu}
            />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
           </>
        }
      />
      <Route path="/movies" element={<Movies isOpenedMenu={openedMenu} onOpenMenu={openMenu} onCloseMenu={closeMenu} />} />
      <Route path="/saved-movies" element={<SavedMovies isOpenedMenu={openedMenu} onOpenMenu={openMenu} onCloseMenu={closeMenu} />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Profile isOpenedMenu={openedMenu} onOpenMenu={openMenu} onCloseMenu={closeMenu} />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      
     
    </div>
  );
}

export default App;
