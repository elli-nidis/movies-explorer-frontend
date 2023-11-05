export function convertDurationToFullTime(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = hours > 0 ? (duration % (hours * 60)).toString() : (duration).toString();
  const fullMinutes = minutes.length > 1 ? minutes : "0" +  minutes;
  return `${hours}ч ${fullMinutes}м`;
}

export function filterDurationMovies(movies) {
  return movies.filter((movie) => movie.duration < 40);
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
