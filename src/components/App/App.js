import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import './App.css';
import '../Cover/Cover.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
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
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
import * as auth from '../../utils/auth';

function App() {

  
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [openedMenu, setOpenedMenu] = React.useState(false);
  const [currentUser, setCurrentUser ] = React.useState({});

  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [infoTooltipParams, setInfoTooltipParams] = React.useState({});

  function handleRegistrationClick({imgLink, text, name}) {
    setInfoTooltipOpen(true);
    setInfoTooltipParams({imgLink, text, name});
  }

  function handleLogOut() {
    setLoggedIn(false);
  }

  function openMenu() {
    setOpenedMenu(true);
  }

  function closeMenu() {
    setOpenedMenu(false);
  }

  function closePopup() {
    setInfoTooltipOpen(false);
  }

  function handleLogin(email, password) {
    auth.authorize(email, password);
    setLoggedIn(true);
  }

  function handleLogOut() {
    setLoggedIn(false);
    // setCurrentUserEmail('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`page ${openedMenu ? "cover" : ""}`}>
        <Routes>
          <Route path="/" element={
            <>
              <Header
                isLoggedIn={loggedIn}
                // handleLogOut={handleLogOut}
                isOpenedMenu={openedMenu}
                onOpenMenu={openMenu}
                onCloseMenu={closeMenu}
              />
              <Main
                children={
                  <>
                    <Promo />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                  </>
                }
              />
              <Footer />
            </>
          }
        />
        <Route path="/movies" element={
          <>
            <Header
                isLoggedIn={loggedIn}
                // handleLogOut={handleLogOut}
                isOpenedMenu={openedMenu}
                onOpenMenu={openMenu}
                onCloseMenu={closeMenu}
              />
            <Main children={
              <Movies isOpenedMenu={openedMenu} onOpenMenu={openMenu} onCloseMenu={closeMenu} />
            }/>
          </>
          }/>
        <Route path="/saved-movies" element={
          <>
            <Header
                isLoggedIn={loggedIn}
                // handleLogOut={handleLogOut}
                isOpenedMenu={openedMenu}
                onOpenMenu={openMenu}
                onCloseMenu={closeMenu}
              />
              <Main children={
                <SavedMovies isOpenedMenu={openedMenu} onOpenMenu={openMenu} onCloseMenu={closeMenu} />
                }/>
          </>
        }/>
        <Route path="/signup" element={
          <Main
            children={
              <Register onRegister={handleRegistrationClick} handleLogin={handleLogin}/>
            }/>}
        />
        <Route path="/signin" element={
          <Main children={
            <Login />
          }/>}
        />
        <Route path="/profile" element={
          <>
            <Header
                isLoggedIn={loggedIn}
                // handleLogOut={handleLogOut}
                isOpenedMenu={openedMenu}
                onOpenMenu={openMenu}
                onCloseMenu={closeMenu}
              />
            <Main children={
              <Profile handleLogOut={handleLogOut} isOpenedMenu={openedMenu} onOpenMenu={openMenu} onCloseMenu={closeMenu} />
            }/>
          </>
        }
        />
        <Route path="*" element={
          <Main children={
            <PageNotFound />
          }/>}
        />
        </Routes>
      </div>

      <InfoTooltip
        infoTooltipParams={infoTooltipParams}
        isOpen={isInfoTooltipOpen}
        onClose={closePopup}
      />
      
    </ CurrentUserContext.Provider>
  );
}

export default App;
