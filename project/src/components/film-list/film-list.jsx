import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

function FilmList(props) {
  const films = props.films;
  // eslint-disable
  // console.log(films);
  return (
    <>
      {films.map((film) => <FilmCard key={film.id} film={film}/>)}
    </>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      rating: PropTypes.string.isRequired,
      ratings: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      video: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export default FilmList;
