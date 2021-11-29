import React from 'react';
import FilmOverview from '../film-overview/film-overview.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import FilmReviews from '../film-reviews/film-reviews.jsx';
import PropTypes from 'prop-types';

const navigationTypeList = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

function FilmCardNavigation(props) {
  const [navigationType, setNavigationType] = React.useState(navigationTypeList.OVERVIEW);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(navigationTypeList).map((key) => (
            <li key={key} className={`film-nav__item ${navigationType === key ? 'film-nav__item--active' : ''}`}>
              <a href="#" className="film-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  setNavigationType(key);
                }}
              >
                {key}
              </a>
            </li>),
          )}
        </ul>
      </nav>
      {navigationType === navigationTypeList.OVERVIEW ? <FilmOverview  film={props.film} /> :''}
      {navigationType === navigationTypeList.DETAILS ? <FilmDetails film={props.film}/> :''}
      {navigationType === navigationTypeList.REVIEWS ? <FilmReviews coments={props.comments}/> :''}
    </>
  );
}

FilmCardNavigation.propTypes = {
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
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    }),
  ),
};


export default FilmCardNavigation;
