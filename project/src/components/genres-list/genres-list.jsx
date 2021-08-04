import React from 'react';
import PropTypes from 'prop-types';
import {GENRES} from '../../store/reducer.js';


const genresList = {
  [GENRES.ALLGENRES]: 'All genres',
  [GENRES.COMEDIES]: 'Comedies',
  [GENRES.COMEDIES]: 'Crime',
  [GENRES.COMEDIES]: 'Dramas',
  [GENRES.COMEDIES]: 'Horror',
  [GENRES.COMEDIES]: 'Kids & Family',
  [GENRES.COMEDIES]: 'Romance',
  [GENRES.COMEDIES]: 'Sci-Fi',
  [GENRES.COMEDIES]: 'Thrillers',
};

function GenresList({genre, changeGenre}) {
  //eslint-disable
  // console.log(review);
  return (
    <ul className="catalog__genres-list">
      {Object.keys(genresList).map((key) => (
        <li key={key} className={`catalog__genres-item ${genre === key ? 'catalog__genres-item--active' : ''}`}>
          <a href className="catalog__genres-link"
            onClick={() => changeGenre(key)}
          >
            {genresList[key]}
          </a>
        </li>),
      )}
    </ul>
  );
}

GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

export default GenresList;
