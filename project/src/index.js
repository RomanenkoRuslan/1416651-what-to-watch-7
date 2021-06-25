import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getRandomInRange, getRandomItem} from './utils.js';
import {TITLESFILMS, GENRES, SUMFILMS} from './const.js';

function getFilmCard() {
  return {
    id: getRandomInRange(10000, 99999),
    title: getRandomItem(TITLESFILMS),
    genre: getRandomItem(GENRES),
    year: getRandomInRange(2021, 1990),
  };
}

const filmsArray = new Array(SUMFILMS).fill().map(getFilmCard);
export default filmsArray;

const filmCard = getFilmCard();

ReactDOM.render(
  <React.StrictMode>
    <App
      film={filmCard}
    />
  </React.StrictMode>,
  document.getElementById('root'));
