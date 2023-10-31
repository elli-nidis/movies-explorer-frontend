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
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Profile from "../Main/Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import InfoTooltipUpdate from "../infoTooltipUpdate/infoTooltipUpdate";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as api from "../../utils/MainApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] =
    React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isInfoToolTipUpdatePopupOpen, setInfoToolTipUpdatePopupOpen] =
    React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const isOpenPopup = isInfoToolTipPopupOpen || isInfoToolTipUpdatePopupOpen;

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

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
        setInfoToolTipPopupOpen(true);
        setIsSuccess(true);
        handleLoginUser({ email, password });
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      });
  }

  function handleLoginUser({ email, password }) {
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setInfoToolTipPopupOpen(true);
          setIsSuccess(true);
          localStorage.setItem("jwt", res.token);

          navigate("/movies", { replace: true });

          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true);
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
        setInfoToolTipUpdatePopupOpen(true);
        setIsUpdate(true);

        setCurrentUser(data);
      })
      .catch((err) => {
        setInfoToolTipUpdatePopupOpen(true);
        setIsUpdate(false);

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
    setInfoToolTipPopupOpen(false);
    setInfoToolTipUpdatePopupOpen(false);
  }

  function closeByOverlayPopup(event) {
    if (event.target === event.currentTarget) {
      closeAllPopup();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Header loggedIn={isLoggedIn} />
                  <Main />
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
                  <Login
                    isLoading={isLoading}
                    onAuthorization={handleLoginUser}
                  />
                )
              }
            />

            <Route
              path={"/signup"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                    isLoading={isLoading}
                    onRegister={handleRegistrationUser}
                  />
                )
              }
            />

            <Route path={"*"} element={<NotFound />} />

            <Route
              path={"/movies"}
              element={
                <ProtectedRoute
                  path="/movies"
                  component={Movies}
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleDeleteMovieServer}
                  handleLikeFilm={handleAddMovieServer}
                />
              }
            />

            <Route
              path={"/saved-movies"}
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleDeleteMovieServer}
                />
              }
            />

            <Route
              path={"/profile"}
              element={
                <ProtectedRoute
                  path="/profile"
                  component={Profile}
                  signOut={handleExitSiteMovie}
                  onUpdateUser={handleEditUserInfo}
                  loggedIn={isLoggedIn}
                  isLoading={isLoading}
                />
              }
            />
          </Routes>

          <InfoTooltip
            isOpenPopup={isInfoToolTipPopupOpen}
            isSuccess={isSuccess}
            onCloseOverlay={closeByOverlayPopup}
            onClose={closeAllPopup}
          />

          <InfoTooltipUpdate
            isOpenPopup={isInfoToolTipUpdatePopupOpen}
            isUpdate={isUpdate}
            onCloseOverlay={closeByOverlayPopup}
            onClose={closeAllPopup}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
