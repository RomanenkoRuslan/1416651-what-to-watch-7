import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player.jsx';

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
      <div className="small-film-card__image">
        {!isActive && <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={film.title} width="280" height="175" />}
        {isActive && <VideoPlayer src={film.video}/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.title}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.arrayOf(
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

export default FilmCard;
