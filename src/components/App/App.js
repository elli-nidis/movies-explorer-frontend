import React from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as api from "../../utils/MainApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [openedMenu, setOpenedMenu] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const isOpenPopup = isInfoTooltipPopupOpen;
  const [infoTooltipParams, setInfoTooltipParams] = React.useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  function openMenu() {
    setOpenedMenu(true);
    console.log(openedMenu);
  }

  function closeMenu() {
    setOpenedMenu(false);
    console.log(openedMenu);
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });

      api
        .getMovies()
        .then((moviesData) => {
          setSavedMovies(moviesData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopup();
      }
    }
    if (isOpenPopup) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpenPopup]);

  function handleRegistrationUser({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        handleLoginUser({ email, password });
      })
      .catch((err) => {
        setInfoTooltipPopupOpen(true);
        setInfoTooltipParams({imgLink: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.', name: 'Неудачная регистрация'});
        setIsSuccess(false);
        console.log(err);
      });
  }

  function handleLoginUser({ email, password }) {
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setInfoTooltipPopupOpen(true);
          setInfoTooltipParams({imgLink: 'success', text: 'Успешно!', name: 'Успешная авторизация'});
          setIsSuccess(true);
          localStorage.setItem("jwt", res.token);
          navigate("/movies", { replace: true });
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setInfoTooltipPopupOpen(true);
        setInfoTooltipParams({imgLink: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.', name: 'Неудачная авторизация'});
        setIsSuccess(false);
        console.log(err);
      });
  }

  function handleAddMovieServer(card) {
    api
      .addCardServer(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleDeleteMovieServer(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleEditUserInfo(newUserInfo) {
    api
      .editUserInfo(newUserInfo)
      .then((data) => {
        setInfoTooltipPopupOpen(true);
        setInfoTooltipParams({imgLink: 'success', text: 'Данные обновлены!', name: 'Успешное обновление'});
        setCurrentUser(data);
      })
      .catch((err) => {
        setInfoTooltipPopupOpen(true);
        setInfoTooltipParams({imgLink: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.', name: 'Неудачное обновление'});
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleExitSiteMovie() {
    setIsLoggedIn(false);
    localStorage.removeItem("allMovies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("movies");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("jwt");
    navigate("/");
  }

  function handleUnauthorized(err) {
    if (err === "Error: 401") {
      handleExitSiteMovie();
    }
  }

  function closeAllPopup() {
    setInfoTooltipPopupOpen(false);
  }

  function closeByOverlayPopup(event) {
    if (event.target === event.currentTarget) {
      closeAllPopup();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`page ${openedMenu ? "cover" : ""}`}>
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Header
                    loggedIn={isLoggedIn}
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

            <Route
              path={"/signin"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Main children={
                    <Login
                      isLoading={isLoading}
                      onAuthorization={handleLoginUser}
                    />
                  }/>
                )
              }
            />

            <Route
              path={"/signup"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Main children={
                    <Register
                      isLoading={isLoading}
                      onRegister={handleRegistrationUser}
                    />
                  }/>
                )
              }
            />

            <Route
              path={"/movies"}
              element={
                <>
                  <Header
                    loggedIn={isLoggedIn}
                    isOpenedMenu={openedMenu}
                    onOpenMenu={openMenu}
                    onCloseMenu={closeMenu}
                  />
                  <Main children={
                    <ProtectedRoute
                    path="/movies"
                    component={Movies}
                    savedMovies={savedMovies}
                    loggedIn={isLoggedIn}
                    onDeleteCard={handleDeleteMovieServer}
                    handleLikeFilm={handleAddMovieServer}
                    />
                  }/>
                <Footer />
                </>
                
              }
            />

            <Route
              path={"/saved-movies"}
              element={
                <>
                  <Header
                    loggedIn={isLoggedIn}
                    isOpenedMenu={openedMenu}
                    onOpenMenu={openMenu}
                    onCloseMenu={closeMenu}
                  />
                  <ProtectedRoute
                  path="/saved-movies"
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleDeleteMovieServer}
                  />
                  <Footer />
                </>
                
              }
            />

            <Route
              path={"/profile"}
              element={
                <>
                  <Header
                    loggedIn={isLoggedIn}
                    isOpenedMenu={openedMenu}
                    onOpenMenu={openMenu}
                    onCloseMenu={closeMenu}
                  />
                   <Main children={
                      <ProtectedRoute
                      path="/profile"
                      component={Profile}
                      signOut={handleExitSiteMovie}
                      onUpdateUser={handleEditUserInfo}
                      loggedIn={isLoggedIn}
                      isLoading={isLoading}
                    />
                   }/>
                </>
              }
            />

            <Route path={"*"} element={<PageNotFound />} />
          </Routes>

          <InfoTooltip
            infoTooltipParams={infoTooltipParams}
            isOpenPopup={isInfoTooltipPopupOpen}
            isSuccess={isSuccess}
            onCloseOverlay={closeByOverlayPopup}
            onClose={closeAllPopup}
          />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
