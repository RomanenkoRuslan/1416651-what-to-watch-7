import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import ButtonMore from '../button-more/button-more.jsx';

function FilmList(props) {
  const films = props.films;
  const FILMSSUM = films.length;
  const MINIMUM_RENDERED = 8;
  const MINIMUM_RENDERED_RECOMMEND = 4;
  const [filmLimit, setFilmLimit] = React.useState(MINIMUM_RENDERED);
  const isButton = props.isButton;
  return (
    <>
      <div className="catalog__films-list">
        {films.slice(0, `${isButton ? filmLimit : MINIMUM_RENDERED_RECOMMEND}`).map((film) => <FilmCard key={film.id} film={film}/>)}
      </div>
      {isButton && FILMSSUM > MINIMUM_RENDERED && filmLimit < FILMSSUM ? <ButtonMore onClick={() => {setFilmLimit(filmLimit + MINIMUM_RENDERED);}}/> : ''}
    </>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      videoLink: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
  isButton: PropTypes.bool.isRequired,
};

export default FilmList;
