import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MiniPlayer from '../mini-player/mini-player.jsx';

function FilmCard(props) {
  const film = props.film;
  const [isActive, setIsActive] = React.useState(false);
  const timer = React.useRef(0);
  const SECOND = 1000;
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        timer.current = setTimeout(() => setIsActive(true), SECOND);
      }}

      onMouseLeave={() => {
        clearTimeout(timer.current);
        setIsActive(false);
      }}
    >
      <Link to={`/films/${film.id}`}>
        <div className="small-film-card__image">
          {!isActive && <img src={film.previewImage} alt={film.name} width="280" height="175" />}
          {isActive && <MiniPlayer src={film.previewVideoLink}/>}
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
};

export default FilmCard;
