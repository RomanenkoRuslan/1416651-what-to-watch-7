import React from 'react';
import {GENRES} from '../../store/reducer.js';
import PropTypes from 'prop-types';


const genresList = {
  [GENRES.ALLGENRES]: 'All genres',
  [GENRES.COMEDY]: 'Comedy',
  [GENRES.CRIME]: 'Crime',
  [GENRES.DRAMA]: 'Drama',
  [GENRES.ADVENTURE]: 'Adventure',
  [GENRES.FANTASY]: 'Fantasy',
  [GENRES.ACTION]: 'Action',
  [GENRES.THRILLER]: 'Thriller',
};

function GenresList({genre, onChangeGenre}) {
  return (
    <ul className="catalog__genres-list">
      {Object.keys(genresList).map((key) => (
        <li key={key} className={`catalog__genres-item ${genre === key ? 'catalog__genres-item--active' : ''}`}>
          <a href="#" className="catalog__genres-link"
            onClick={() => onChangeGenre(key)}
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
  onChangeGenre: PropTypes.func.isRequired,
};

export default GenresList;
