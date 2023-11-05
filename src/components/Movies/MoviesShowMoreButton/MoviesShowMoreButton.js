import './MoviesShowMoreButton.css';

function MoviesShowMoreButton({onClick}) {

  return (
    <button className="movies-show-more-button" onClick={onClick} type="button" aria-label="показать ещё">Ещё</button>
  );
}

export default MoviesShowMoreButton;