import React from 'react';
import PropTypes from 'prop-types';

function FilmOverview(props) {
  const film = props.film;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {film.rating < 3 ? 'Bad' : ''}
            {film.rating < 5 && film.rating > 3 ? 'Normal' : ''}
            {film.rating < 8 && film.rating > 5 ? 'Good' : ''}
            {film.rating < 10 && film.rating > 8 ? 'Very good' : ''}
            {film.rating === 10 ? 'Awesome' : ''}
          </span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring} and other</strong></p>
      </div>
    </>
  );
}

FilmOverview.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    scoresCount: PropTypes.number.isRequired,
  }),
};

export default FilmOverview;
