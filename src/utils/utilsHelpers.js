import { SHORT_FILM, MINUTES_IN_AN_HOUR } from "./constants";

export function convertDurationToFullTime(duration) {
  const hours = Math.floor(duration / MINUTES_IN_AN_HOUR);
  const minutes = hours > 0 ? (duration % (hours * MINUTES_IN_AN_HOUR)).toString() : (duration).toString();
  const fullMinutes = minutes.length > 1 ? minutes : "0" +  minutes;
  return `${hours}ч ${fullMinutes}м`;
}

export function filterDurationMovies(movies) {
  return movies.filter((movie) => movie.duration < SHORT_FILM);
}

export function filterMovies(movies, query) {
  const moviesQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return (
      movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1
    );
  });
  return moviesQuery;
}
